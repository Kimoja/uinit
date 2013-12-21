/*****************************************************************
* ACCORDION
*****************************************************************/
$.uinit(
    {
        name : 'ui-accordion',
        create : function(el)
        {
            var config = this.expando(el);
           
            if(config.notAnimate)
                config.animate = false;

            if(config.unactive)
                config.active = false;

            el.accordion(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'unactive' : 'boolean',
                    'active' : 'integer',
                    'not-animate' : 'boolean',
                    'animate' : {
                        'easing' : 'string',
                        'duration' : 'integer'
                    },
                    'collapsible' : 'boolean',
                    'disabled' : 'boolean',
                    'event' : 'string',
                    'header' : 'string',
                    'height-style' : 'string',
                    'icons' : {
                        'header' : 'string',
                        'active-header' : 'string'
                    },
                    //events
                    'activate' : 'function(e,ui)',
                    'before-activate' : 'function(e,ui)',
                    'create' : 'function(e,ui)'
                }
            }
        )
    }
);
    

/*****************************************************************
* AUTOCOMPLETE 
*****************************************************************/
$.uinit(
    {
        name : 'ui-autocomplete',
        create : function(el)
        {
            var config = this.expando(el);
           
            if(config.url)
            {
               config.source = config.url;
            }
            else if(config.data)
            {
               config.source = config.data;
            } 

            el.autocomplete(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                     'append-to' : 'string',
                    'auto-focus' : 'boolean',
                    'delay' : 'integer',
                    'disabled' : 'boolean',
                    'min-length' : 'integer',
                    'position' : {
                        'my' : 'string',
                        'at' : 'string',
                        'collision' : 'boolean'
                    },
                    'url' : 'string',
                    'data' : 'json',
                    'source' : 'function(e,ui)',
                    //events
                    'change' : 'function(e,ui)',
                    'close' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'focus' : 'function(e,ui)',
                    'open' : 'function(e,ui)',
                    'response' : 'function(e,ui)',
                    'search' : 'function(e,ui)',
                    'select' : 'function(e,ui)'
                }
            }
        )
    }
);
   
   
   
/*****************************************************************
* BUTTON 
*****************************************************************/
$.uinit(
    {
        name : 'ui-button',
        create : function(el)
        {
            var config = this.expando(el);
           
            if(config.notAnimate)
                config.animate = false;

            if(config.unactive)
                config.active = false;

            el.accordion(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'append-to' : 'string',
                    'auto-focus' : 'boolean',
                    'delay' : 'integer',
                    'disabled' : 'boolean',
                    'min-length' : 'integer',
                    'position' : {
                        'my' : 'string',
                        'at' : 'string',
                        'collision' : 'boolean'
                    },
                    'url' : 'string',
                    'data' : 'json',
                    'source' : 'function(e,ui)',
                    //events
                    'change' : 'function(e,ui)',
                    'close' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'focus' : 'function(e,ui)',
                    'open' : 'function(e,ui)',
                    'response' : 'function(e,ui)',
                    'search' : 'function(e,ui)',
                    'select' : 'function(e,ui)'
                }
            }
        )
    }
);
   
   
/*****************************************************************
* DATEPICKER 
*****************************************************************/

$.uinit(
    {
        name : 'ui-datepicker',
        create : function(el)
        {
            var config = this.expando(el);
           
            if(config.isRtl)
            {
                config.isRTL =true;
            }

            //normalize event
            if(config.changeMonthYear)
            {
                config.onChangeMonthYear = config.changeMonthYear;
            }
            if(config.close)
            {
                config.onClose = config.close;
            }
            if(config.select)
            {
                config.onSelect = config.select;
            }

            el.datepicker(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'date-format' : 'string',
                    'alt-field' : 'string',
                    'alt-format' : 'string',
                    'append-text' : 'string',
                    'auto-size' : 'boolean',
                    'button-image' : 'string',
                    'button-image-only' : 'boolean',
                    'button-text' : 'string',
                    'change-month' : 'boolean',
                    'change-year' : 'boolean',
                    'close-text' : 'string',
                    'constrain-input' : 'boolean',
                    'current-text' : 'string',
                    'day-names' : 'json',
                    'day-names-min' : 'json',
                    'day-names-short' : 'json',
                    'default-date' : 'string',
                    'duration' : 'string',
                    'first-day' : 'integer',
                    'goto-current' : 'boolean',
                    'hide-if-no-prev-next' : 'boolean',
                    'is-rtl' : 'boolean',
                    'max-date' : 'string',
                    'min-date' : 'string',
                    'month-names' : 'json',
                    'month-names-short' : 'json',
                    'navigation-as-date-format' : 'boolean',
                    'next-text' : 'string',
                    'number-of-months' : 'spacelist',
                    'prev-text' : 'string',
                    'select-other-months' : 'boolean',
                    'short-year-cutoff' : 'string',
                    'show-anim' : 'string',
                    'show-button-panel' : 'boolean',
                    'show-current-at-pos' : 'integer',
                    'show-month-after-year' : 'boolean',
                    'show-on' : 'string',
                    'show-options' : 'json',
                    'show-other-months' : 'boolean',
                    'show-week' : 'boolean',
                    'step-months' : 'integer',
                    'week-header' : 'string',
                    'year-range' : 'string',
                    'year-suffix' : 'string',
                    'calculate-week' : 'function(e,ui)',
                    //event 
                    'change-month-year' : 'function(e,ui)',
                    'close' : 'function(e,ui)',
                    'select' : 'function(e,ui)',
                    'before-show' : 'function(e,ui)',
                    'before-show-day' : 'function(e,ui)'
                }
            }
        )
    }
);
   
   
/*****************************************************************
* DIALOG 
*****************************************************************/
$.uinit(
    {
        name : 'ui-dialog',
        create : function(el)
        {
            var config = this.expando(el);
           
            if(!config.show.enabled)
            {
                delete config.show;
            }

            if(!config.hide.enabled)
            {
                delete config.hide;
            }

            el.dialog(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'append-to' : 'string',
                    'auto-open' : 'boolean',
                    'buttons' : new $.expando.listDescriptor(
                        {
                            selector : '>ui-button',
                            prefix : '',
                            attributes :
                            {
                                'text' : 'string',
                                'click' : 'function(e,ui)'
                            }
                        }
                    ),
                    'close-on-escape' : 'boolean',
                    'close-text' : 'string',
                    'dialog-class' : 'string',
                    'draggable' : 'boolean',
                    'height' : 'string',
                    'max-height' : 'integer',
                    'max-width' : 'integer',
                    'min-height' : 'integer',
                    'min-width' : 'integer',
                    'modal' : 'boolean',
                    'position' : {
                        'my' : 'string',
                        'at' : 'string',
                        'collision' : 'boolean'
                    },
                    'resizable' : 'boolean',
                    'title' : 'string',
                    'width' : 'integer',

                    'show' : {
                        'enabled' : 'boolean',
                        'effect' : 'boolean',
                        'delay' : 'integer',
                        'duration' : 'integer',
                        'easing ' : 'string'
                    },

                    'hide' : {
                        'enabled' : 'boolean',
                        'effect' : 'boolean',
                        'delay' : 'integer',
                        'duration' : 'integer',
                        'easing ' : 'string'
                    },

                    //events
                    'before-close' : 'function(e,ui)',
                    'close' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'drag' : 'function(e,ui)',
                    'drag-start' : 'function(e,ui)',
                    'drag-stop' : 'function(e,ui)',
                    'focus' : 'function(e,ui)',
                    'open' : 'function(e,ui)',
                    'resize' : 'function(e,ui)',
                    'resize-start' : 'function(e,ui)',
                    'resize-stop' : 'function(e,ui)'
                }
            }
        )
    }
);