;(
    function($)
    {
        /**
         * Initilise à partir d'un objet de fabrique les éléments DOM possédant l'attribut ui-class 
         * (même syntaxe que l'attribut classe, liste séparé par des espaces)
         * et créé pour chaque fabrique un objet de configuration à partir des attributs html de l'élément.
         * 
         * Le nom des classes est utilisé comme clé dans l'objet de fabrique.
         * Pour chaque classe définit, la fabrique du même nom sera appellé avec comme premier argument,
         * l'élément possédant l'attribut ui-class et en second, l' objet de configuration.
         * 
         * L'objet de configuration est créé à partir d'un objet de récupération d'attributs html
         * passé en troisième argument, lors de l'ajout de la fabrique a l'objet des fabriques,
         * via la méthode $.fn.uinit.addFactory.
         * 
         * L'objet de récupération d'attributs prend en clé un nom d'attributs HTML et 
         * en valeur une expréssion de récupération de l'attribut.
         * Les expréssions de l'objet de récupération des attributs définiront les membres
         * de l'objet de configuration avec en clé le même nom l'attribut sous forme camélizé.
         * 
         * Ces expréssions peuvent d'être :
         *    - Une fonction, qui sera appliqué si l'attribute existe avec l'élément en premier 
         *      argument et en second l'attribut
         *    - La chaine "eval" qui évaluera la valeur de l'attribut au niveau global
         *    - La chaine "ref" qui définira une référence au niveau global
         *    - La chaine "lambda" qui construira une fonction appliqué au scope de l'objet
         *    - La chaine "json" qui utilisera la méthode JSON.parse()
         *    - La chaine "data" uniquement si l'attribut est du type dataset, qui utilisera 
         *      la méthode jQuery data().
         *    - Un objet, qui définira un espace de nom dans l'objet de configuration
         *    - Les chaines : integer, float, boolean
         *    - Sinon, la valeur renvoyé par la méthode jQuery attr()   
         */
        $.fn.uinit = function()
        {
            var el = $(this),
                classes = el.attr('ui-class');
            
            if(classes)
            {
                $.fn.uinit.init(el, classes);
            }
            
            $('[ui-class]', el).each(
                function()
                {
                    var e = $(this);
                    $.fn.uinit.init(e, e.attr('ui-class'));
                }
            );
        };
        
        $.fn.uinit.init = function uinit(el, classes)
        {
            var factories_names = classes.split(/\s+/),
                factory;
            
            for(var i = 0, l = factories_names.length; i < l; i++)
            {
                factory = $.fn.uinit.factories[factories_names[i]];
                
                if(factory)
                {
                    factory(el);
                }
                else
                {
                    console.error("jQuery.uinit error. Missing factory " + factories_names[i]);
                }
            }
        }
        
        /**
         * Ajoute une fabrique en récupérant dans un hash
         * les attributs de configuration si besoin
         */
        $.fn.uinit.addFactory = function(name, factory, attributes, prefix)
        {
            //si il y'a pas d'attributs de définit,
            //c'est que la fabrique ne demande pas de configuration spécifique
            //on la référence dans le hash des fabriques sans la fonction 
            //encapsulante permettant la construction de l'objet de configuration
            if(!attributes)
            {
                $.fn.uinit.factories[name] = factory;
                return;
            }
            
            //compile la fonction de construction de l'objet de configuration
            var getters = [], 
                function_getters = [], 
                arguments_getters = [];
            
            //le scope des espaces de nom des attributs
            (
                function setAttribute(attributes, namespace_config, namespace_attribute)
                {
                    //pour chaque attribut du hash
                    for(var attribute_name in attributes)
                    {
                        var attribute = attributes[attribute_name],
                            name_config = namespace_config + attribute_name.replace(
                                /(?:[-_])(\w)/g, 
                                function (_, c) {return c ? c.toUpperCase () : ''; }
                            ),
                            name_attribute = namespace_attribute + attribute_name,
                            expr = "c." + name_config + "=",
                            arg;

                        //si l'atribut définit un getter, on le référence 
                        //pour le passer en argument ensuite dans la fonction fabriquant l'objet de configuration
                        if(typeof attribute === 'function')
                        {
                            arg = "$" + arguments_getters.length;
                            getters.push("(a=e.attr('" + name_attribute+ "'))&&(" + 
                                expr + arg + "(e, a));");
                            arguments_getters.push(arg);
                            function_getters.push(attribute);
                        }
                        //si l'attribut vaut eval, on evalue le résultat de l'attibut récupéré
                        //avec la méthode attr() de jQuery pour pouvoir y mettre
                        //des référence, des fonctions ect...
                        else if(attribute === 'eval')
                        {
                            getters.push("(a=e.attr('" + name_attribute+ "'))&&eval('" + 
                                expr + "(' + a.replace(/\'/g, '\\\'') + ')');");
                        }
                        //si l'attribut vaut ref, on retrouve la référence depuis le niveau global
                        else if(attribute === 'ref')
                        {
                            getters.push(expr + "$.fn.uinit.getReference(e.attr('" + name_attribute+ "'));");
                        }
                        //si l'attribut vaut lambda, on créé une fonction. Marce comme les attributs de type
                        //onclick, seulement le context est l'objet jQuery et non DOM
                        else if(attribute === 'lambda')
                        {
                            getters.push("(a=e.attr('" + name_attribute+ "'))&&(" + 
                                expr + "Function(a.replace(/\'/g, '\\\'')).call(e));");
                        }
                        //si l'attribut vaut json, on utilise JSON.parse
                        else if(attribute === 'json')
                        {
                            getters.push("(a=e.attr('" + name_attribute+ "'))&&(" + 
                                expr + "JSON.parse(e.attr('" + name_attribute+ "')));");
                        }
                        //si l'attribut vaut data, on retourne la valeur  renvoyé
                        //par la méthode data() de jQuery
                        else if(attribute === 'data')
                        {
                            getters.push(expr + "e.data('" + name_attribute+ "');");
                        }
                        //si l'attribut est un hash, c'est qu'il définit une espace de nom
                        //dans l'objet de configuration
                        else if(attribute.constructor === Object)
                        {
                            getters.push(expr + "{};");
                            setAttribute(attribute, name_config + '.', name_attribute + '-')
                        }
                        else if(attribute === 'integer')
                        {
                            getters.push(expr + "(a=e.attr('" + name_attribute+ "'))"+
                                "?parseInt(e.attr('" + name_attribute+ "'))||0:0;");
                        }
                        else if(attribute === 'float')
                        {
                            getters.push(expr + "(a=e.attr('" + name_attribute+ "'))"+
                                "?parseFloat(e.attr('" + name_attribute+ "'))||0:0;");
                        }
                        else if(attribute === 'boolean')
                        {
                            getters.push(expr + "(a=e.attr('" + name_attribute+ "'))!=null"+
                                "?true:false;");
                        }
                        //sinon on retourne la valeur rnvoyé par la méthode
                        //attr() de jQuery
                        else
                        {
                            getters.push(expr + "e.attr('" + name_attribute+ "');");
                        }
                    }
                }
            )
            //applique le niveau gobal
            (attributes, '',  prefix ? prefix + '-' : '');
           
           
           
            //compile et affecte la méthode dans le hash des fabriques
            $.fn.uinit.factories[name] = Function.apply(
                window, 
                ["f"]
                    .concat(arguments_getters)
                    .concat(
                        "return function(e){var c = {}, a;" + getters.join('') + " return f(e,c)};"
                    )
            )
            .apply(
                window, 
                [factory].concat(function_getters)
            );
        };
        
        //le hash des fabriques
        $.fn.uinit.factories = {
        };
        
        $.fn.uinit.getReference = function(reference)
        {
            if(reference)
            {
                var names = reference.split('.'),
                    l = names.length,
                    i = 0,
                    ns = window;
                
                for(; i < l - 1; i++)
                {
                    ns = ns[names[i]];
                    
                    if(!ns)return;
                }
                
                return ns[names[i]];
            }
        };
        
    }
)(jQuery);