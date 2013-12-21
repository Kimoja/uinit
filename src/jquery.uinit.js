;(
    function(window, $, undefined)
    {
        $.uinit = function(config)
        {
            $.uinit.keys.push(config.name);
            config.selector = '[' + config.name + ']';
            
            return $.uinit.config[config.name] = config;
        };
        
        $.uinit.config = {};
        $.uinit.keys = [];
        
        $.fn.uinit = function()
        {
            var keys = arguments.length ? arguments : $.uinit.keys,
                l = keys.length,
                i,
                el,
                e,
                data,
                key,
                uinit;
            
            return this.each(
                function() 
                {    
                    el = $(this);
                    data = el.data('uinit');
                    
                    for(i = 0; i < l; i++)
                    {
                        uinit = $.uinit.config[(key = keys[i])];
                       
                        if(this.hasAttribute(uinit.name))
                        {
                            $.fn.uinit.init($(this), uinit, data, key);
                        }
                        
                        el.find(uinit.selector).each(
                            function()
                            { 
                                e = $(this);
                                $.uinit.init(e, uinit, e.data('uinit'), key);
                            }
                        );
                    }
                }
            );
        };
        
        $.uinit.init = function(el, uinit, data, key)
        {
            if(!data && !(data = el.data('uinit')))
            {
                data = {};
                el.data('uinit', data);
            }

            if(key in data)
            {
                uinit.init && uinit.init(el); 
            }
            else
            {
                uinit.create(el);
                data[key] = true;
            }
        };
        
        
        $.fn.uninit = function()
        {
            var keys = arguments.length ? arguments : $.uinit.keys,
                l = keys.length,
                i,
                key,
                el,
                e,
                uinit,
                data;
            
            return this.each(
                function() 
                {    
                    el = $(this);
                    data = $(this).data('uinit');
                    
                    for(i = 0; i < l; i++)
                    {
                        uinit = $.uinit.config[(key = keys[i])];
                        
                        if(uinit.uninit)
                        {
                            $.uinit.uninit(el, uinit, data, key);
                            
                            el.find(uinit.selector).each(
                                function()
                                {
                                    e = $(this);
                                    $.uinit.uninit(e, uinit, e.data('uinit'), key);
                                }
                            );
                        }
                    }
                }
            );
        };
        
        $.uinit.uninit = function(el, uinit, data, key)
        {
            if(data && data[key])
            {
                uinit.uninit(el);
                delete data[key];
            }
        };
    }
)
(window, window.jQuery );