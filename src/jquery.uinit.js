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
         *    - La chaine "function" qui construira une fonction appliqué au scope de l'objet si l'attribut commence par function
         *      sinon elle tentera de retourner une référence
         *    - La chaine "json" qui utilisera la méthode JSON.parse()
         *    - La chaine "data" uniquement si l'attribut est du type dataset, qui utilisera 
         *      la méthode jQuery data().
         *    - Un objet, qui définira un espace de nom dans l'objet de configuration
         *    - La chaine "spacelist" 
         *    - Les chaines : integer, float, boolean
         *    - Sinon, la valeur renvoyé par la méthode jQuery attr()   
         */
        $.fn.uinit = function()
        {
            return this.each(
                function() 
                {      
                    var el = $(this);
                    
                    for(var factories_name in $.fn.uinit.factories)
                    {
                        el.find('[' + factories_name + ']').each(
                            function()
                            {
                                var e = $(this);
                                
                                if(!e.data('uinit'))
                                {
                                    $.fn.uinit.factories[factories_name](e, this);
                                }
                            }
                        );
                    }
                }
            );
        };
        
        
        function compile(
            attributes, 
            namespace_config, 
            namespace_attribute,
            getters,
            function_getters,
            arguments_getters,
            factory,
            root,
            list
        )
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
                    assignement_expr = "c." + name_config + "=",
                    arg,
                    fn;

                //si l'atribut définit un getter, on le référence 
                //pour le passer en argument ensuite dans la fonction fabriquant l'objet de configuration
                if(typeof attribute === 'function')
                {
                    arg = "$" + arguments_getters.length;
                    getters.push(
                        "(a=d.getAttribute('" + name_attribute+ "'))"+
                        "&&(" + assignement_expr + arg + "(e, a));"
                    );
                    arguments_getters.push(arg);
                    function_getters.push(attribute);
                }
                //si l'attribut vaut eval, on evalue le résultat de l'attibut récupéré
                //avec la méthode getAttribute du DOM pour pouvoir y mettre
                //des référence, des fonctions ect...
                else if(attribute === 'eval')
                {
                    getters.push(
                        "(a=d.getAttribute('" + name_attribute+ "'))"+
                        "&&eval('" + assignement_expr + "(' + a.replace(/\'/g, '\\\'') + ')');"
                    );
                }
                //si l'attribut vaut function,
                //si la chaine commence par function, on l'évalue,
                //sinon on retroune la référence 
                else if(attribute === 'function')
                {
                    getters.push(
                        "(a=d.getAttribute('" + name_attribute+ "'))"+
                        "&&(a.indexOf('function')===0"+
                            "?eval('" + assignement_expr + "(' + a.replace(/\'/g, '\\\'') + ')')"+
                            ":("+assignement_expr+"$.fn.uinit.getReference(a)));"
                    );
                }
                //si l'attribut vaut json, on utilise JSON.parse
                else if(attribute === 'json')
                {
                    getters.push("(a=d.getAttribute('" + name_attribute+ "'))"+
                        "&&(" + assignement_expr + "JSON.parse(d.getAttribute('" + name_attribute+ "')));");
                }
                //si l'attribut vaut data, on retourne la valeur  renvoyé
                //par la méthode data() de jQuery
                else if(attribute === 'data')
                {
                    getters.push(assignement_expr + "e.data('" + name_attribute+ "');");
                }
                //si l'attribut est une instance de DomListDescriptor
                else if(attribute instanceof $.fn.uinit.DomListDescriptor)
                {
                    arg = "$" + arguments_getters.length;
                    
                   
                    getters.push(
                        assignement_expr + "[];"+
                        "e.find('"+attribute.selector+"'.replace(/\'/g, '\\\'')).each(function(){"+
                            "c." + name_config + ".push("+arg + "($(this), this));"+
                            "$(this).remove();"+
                        "});"
                    );
                    
                    arguments_getters.push(arg);
                    
                    function_getters.push(
                        compile(
                            attribute.attributes, 
                            '',
                            attribute.prefix ? attribute.prefix + '-' : '', 
                            [],
                            [],
                            [],
                            null,
                            true,
                            true
                        )
                    );/**/
                }
                //si l'attribut est un hash, c'est qu'il définit une espace de nom
                //dans l'objet de configuration
                else if(attribute.constructor === Object)
                {
                    getters.push(assignement_expr + "{};");
                    compile(
                        attribute, 
                        name_config + '.',
                        name_attribute + '-', 
                        getters,
                        function_getters,
                        arguments_getters,
                        null,
                        false,
                        false
                    );
                }
                else if(attribute === 'integer')
                {
                    getters.push("(a=d.getAttribute('" + name_attribute+ "'))&&(" + 
                        assignement_expr + "parseInt(d.getAttribute('" + name_attribute+ "'))||0);");
                }
                else if(attribute === 'float')
                {
                    getters.push("(a=d.getAttribute('" + name_attribute+ "'))&&(" + 
                        assignement_expr + "parseFloat(d.getAttribute('" + name_attribute+ "'))||0);");
                }
                else if(attribute === 'boolean')
                {
                    getters.push(assignement_expr + "(a=d.getAttribute('" + name_attribute+ "'))!=null"+
                        "?true:false;");
                }
                else if(attribute === 'spacelist')
                {
                    getters.push("(a=d.getAttribute('" + name_attribute+ "'))&&(" + 
                        assignement_expr + "d.getAttribute('" + name_attribute+ "').split(/\\s+/));");
                }
                //sinon on retourne la valeur rnvoyé par la méthode
                //getAttribute() du DOM
                else
                {
                    getters.push("(a=d.getAttribute('" + name_attribute+ "'))&&(" + 
                        assignement_expr + "d.getAttribute('" + name_attribute+ "'));");
                }
            }
            
            if(root)
            {
                return Function.apply(
                    window, 
                    (list ? [] : ["f"])
                        .concat(arguments_getters)
                        .concat(
                            "return function(e,d){var c = {}, a;" + getters.join('') +
                            (list ? "return c;};" : "return f(e,c);};")
                        )
                )
                .apply(
                    window, 
                    (list ? [] : [factory]).concat(function_getters)
                );
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
            
            $.fn.uinit.factories[name] = compile(
                attributes, '',  prefix ? prefix + '-' : '', [], [], [], factory, true, false
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
        
        $.fn.uinit.DomListDescriptor = function(selector, attributes, prefix)
        {
            this.selector = selector;
            this.attributes = attributes;
            this.prefix = prefix;
        };
        
    }
)(jQuery);