;(
    function(window, $, undefined)
    {
        $.expando = function(config, source)
        {
            if(!config.attributes)
            {
                return function()
                {
                    return {};
                }
            }
            
            var function_getters = [];
                
            var fn = $.expando.compile(
                config.attributes,
                '',  
                config.prefix ? config.prefix + '-' : '', 
                [], 
                function_getters,
                true
            );
            
            if(function_getters.length)
            {
                function_getters = $.map(
                    function_getters, 
                    function(fn, i)
                    {
                        return "function $"+ i + "(e){" + fn + "}";
                    }
                );
                    
                return source ? 
                    "(function(){"+function_getters.join()+" return function(e){" + fn + "}})();"
                    : Function(function_getters.join()+" return function(e){" + fn + "}")();
            }
            else
            {
                return source ? "function(e){" + fn + "}" : Function("e", fn);
            }
        };
        
        $.expando.compile = function (
            attributes, 
            namespace_attribute,
            namespace_config, 
            getters,
            function_getters,
            root
        )
        {
            for(var attribute_name in attributes)
            {
                var attribute = attributes[attribute_name],
                    name_config = namespace_config + attribute_name.replace(
                        /(?:[-_])(\w)/g, 
                        function (_, c) {return c.toUpperCase (); }
                    ),
                    name_attribute = namespace_attribute + attribute_name,
                    assignement_expr = "c." + name_config + "=",
                    arg;
                
                if(typeof attribute == 'object')
                {
                    if(attribute.constructor === Object)
                    {
                        getters.push(
                            assignement_expr + "{};" +
                            $.expando.compile(
                                attribute, 
                                name_attribute + '-', 
                                name_config + '.',
                                [],
                                function_getters,
                                false
                            )
                        );
                    }
                    else if( attribute instanceof $.expando.ListDescriptor)
                    {
                        arg = "$" + function_getters.length;
                        
                        function_getters.push(
                            $.expando.compile(
                                attribute.config.attributes,
                                '',  
                                attribute.config.prefix ? attribute.config.prefix + '-' : '', 
                                [], 
                                function_getters,
                                true
                            )
                        );
                        
                        getters.push(
                            assignement_expr + "[];"+
                            "e.find('"+attribute.config.selector+"'.replace(/\'/g, '\\\'')).each(function(){"+
                                "var n=$(this);" +
                                "c." + name_config + ".push("+arg + "(n));"+
                                "n.remove();"+
                            "});"
                        );
                    }
                }
                else
                {
                    if(/function\(/.test(attribute))
                    {
                       getters.push(
                            $.expando.getters['function'](
                                assignement_expr,
                                name_attribute,
                                attribute
                            )
                        );
                    }
                    else
                    {
                        $.expando.getters[attribute] &&  getters.push(
                            $.expando.getters[attribute](
                                assignement_expr,
                                name_attribute
                            )
                        );
                    }
                }
                
            }
            
            return (root ? "var c={},d=e[0],a;" : "") + getters.join('') + (root ? "return c;" : "");
        };
        
        
        $.expando.getters = {
            
            "eval" : function(assignement_expr, name_attribute)
            {
                return "if(a=d.getAttribute('" + name_attribute+ "'))"+
                    "eval('" + assignement_expr + "('+a.replace(/\'/g,'\\\'')+')');";
            },
            
            "function" : function(assignement_expr, name_attribute, attribute)
            {
                var args 
                return "if(a=d.getAttribute('" + name_attribute+ "'))"+
                    "a.indexOf('function')===0"+
                        "?eval('" + assignement_expr + "('+a.replace(/\'/g, '\\\'')+')')"+
                        ":"+ assignement_expr + "Function("+ 
                            $.map(
                                /\(([^)]*)\)/m.exec(attribute)[1].split(','), 
                                function(a){return "'" + a + "'";}
                            ).concat('a').join(',') +
                        ");"
            },
            
            "json" : function(assignement_expr, name_attribute)
            {
                return "if(a=d.getAttribute('" + name_attribute+ "'))"+ assignement_expr + "JSON.parse(a);";
            },
            
            "data" : function(assignement_expr, name_attribute)
            {
                return  assignement_expr + "e.data('" + name_attribute+ "');";
            },
            
            "integer" : function(assignement_expr, name_attribute)
            {
                return  "if(a=d.getAttribute('" + name_attribute+ "'))" + assignement_expr + "parseFloat(a)||0;";
            },
            
            "float" : function(assignement_expr, name_attribute)
            {
                return "if(a=d.getAttribute('" + name_attribute+ "'))" + assignement_expr + "parseFloat(a)||0;";
            },
            
            "boolean" : function(assignement_expr, name_attribute)
            {
                return assignement_expr + "(a=d.getAttribute('" + name_attribute+ "'))!=null?true:false;";
            },
            
            "spacelist" : function(assignement_expr, name_attribute)
            {
                return  "if(a=d.getAttribute('" + name_attribute+ "'))" + assignement_expr + "a.split(/\\s+/);";
            },
            
            "string" : function(assignement_expr, name_attribute)
            {
                return "if(a=d.getAttribute('" + name_attribute+ "'))" + assignement_expr + "a;";
            }
        };
        
        $.expando.ListDescriptor = function(config)
        {
            this.config = config;
        }
        
        $.expando.listDescriptor = function(config)
        {
            return new $.expando.ListDescriptor(config);
        }
    }
)
(window, window.jQuery );