/*****************************************************************
* ACCORDION
*****************************************************************/
$.uinit(
    {
        name : 'ui-accordion',
        create : function(el)
        {
            var config = this.expando(el);
           
            if(config.animate.enabled)
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
                    'animate' : {
                        'enabled' : 'boolean',
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
            el.button(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'disabled' : 'boolean',
                    'icons' : {
                        'primary' : 'string',
                        'secondary' : 'string'
                    },
                    'label': 'string',
                    'text' : 'boolean'
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
           
            if(config.show.disabeld)
                delete config.show;

            if(config.hide.disabeld)
                delete config.hide;

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
                        'disabled' : 'boolean',
                        'effect' : 'string',
                        'delay' : 'integer',
                        'duration' : 'integer',
                        'easing ' : 'string'
                    },

                    'hide' : {
                        'disabled' : 'boolean',
                        'effect' : 'string',
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
    
/*****************************************************************
* MENU
*****************************************************************/
$.uinit(
    {
        name : 'ui-menu',
        create : function(el)
        {
            var config = this.expando(el);
            el.menu(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'disabled' : 'boolean',
                    'icons' : {
                        'submenu' : 'string'
                    },
                    'menus' : 'string',
                    'position' : {
                        'my' : 'string',
                        'at' : 'string',
                        'collision' : 'boolean'
                    },

                    'role' : 'string',
                    //events
                    'blur' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'focus' : 'function(e,ui)',
                    'select' : 'function(e,ui)'
                }
            }
        )
    }
);
    
/*****************************************************************
* Progressbar 
*****************************************************************/
$.uinit(
    {
        name : 'ui-progressbar',
        create : function(el)
        {
            var config = this.expando(el);
            
            if(config.indeterminate)
                config.value = false;
            
            el.progressbar(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'disabled' : 'boolean',
                    'value' : 'integer',
                    'indeterminate' : 'boolean',
                    'max' : 'integer',
                    //events
                    'change' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'complete' : 'function(e,ui)'
                }
            }
        )
    }
);

/*****************************************************************
* Slider  
*****************************************************************/
$.uinit(
    {
        name : 'ui-slider',
        create : function(el)
        {
            var config = this.expando(el);
            
            if(config.animate.enabled)
                config.animate = false;

            if(config.rangeMin)
                config.range = 'min';
            
            if(config.rangeMax)
                config.range = 'max';
            
            el.slider(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'disabled' : 'boolean',
                    'animate' : {
                        'enabled' : 'boolean',
                        'easing' : 'string',
                        'duration' : 'integer'
                    },
                    'min' : 'float',
                    'max' : 'float',
                    'orientation' : 'string',
                    'range' : 'boolean',
                    'range-min' : 'boolean',
                    'range-max' : 'boolean',
                    'step' : 'float',
                    'value' : 'integer',
                    'values' : 'spacelist',
                    //events
                    'change' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'slide' : 'function(e,ui)',
                    'start' : 'function(e,ui)',
                    'stop' : 'function(e,ui)'
                }
            }
        )
    }
);
    
    
/*****************************************************************
* Spinner  
*****************************************************************/
$.uinit(
    {
        name : 'ui-spinner ',
        create : function(el)
        {
            var config = this.expando(el);
            
            if(config.incrementalFunction)
                config.incremental = config.incrementalFunction;
            
            el.spinner(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'culture' : 'string',
                    'disabled' : 'boolean',
                    'icons' : {
                        'down' : 'string',
                        'up' : 'string'
                    },
                    'incremental' : 'string',
                    'incremental-function' : 'function(i)',
                    'min' : 'float',
                    'max' : 'float',
                    'numberFormat' : 'string',
                    'page' : 'float',
                    'step' : 'float',
                    
                    //events
                    'change' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'spin' : 'function(e,ui)',
                    'start' : 'function(e,ui)',
                    'stop' : 'function(e,ui)'
                }
            }
        )
    }
);
    
    
/*****************************************************************
* Tabs  
*****************************************************************/
$.uinit(
    {
        name : 'ui-tabs',
        create : function(el)
        {
            var config = this.expando(el);
            
            if(config.unactive)
                config.active = false;

            if(config.show.disabeld)
                delete config.show;

            if(config.hide.disabeld)
                delete config.hide;
           
            el.tabs(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'unactive' : 'boolean',
                    'active' : 'integer',
                    'collapsible' : 'boolean',
                    'disabled' : 'boolean',
                    'event' : 'string',
                    'height-style' : 'string',
                    
                    'show' : {
                        'disabled' : 'boolean',
                        'effect' : 'string',
                        'delay' : 'integer',
                        'duration' : 'integer',
                        'easing ' : 'string'
                    },

                    'hide' : {
                        'disabled' : 'boolean',
                        'effect' : 'string',
                        'delay' : 'integer',
                        'duration' : 'integer',
                        'easing ' : 'string'
                    },

                    //events
                    'activate' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'before-activate' : 'function(e,ui)',
                    'before-load' : 'function(e,ui)',
                    'load' : 'function(e,ui)'
                }
            }
        )
    }
);
    
/*****************************************************************
* Tooltip  
*****************************************************************/
$.uinit(
    {
        name : 'ui-tooltip',
        create : function(el)
        {
            var config = this.expando(el);
            
            if(config.contentFunction)
                config.content = config.contentFunction;
            
            if(config.show.disabeld)
                delete config.show;

            if(config.hide.disabeld)
                delete config.hide;
           
            el.tooltip(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'content' : 'string',
                    'content-function' : 'function(e)',
                    'disabled' : 'boolean',
                    'items' : 'string',
                    'position' : {
                        'my' : 'string',
                        'at' : 'string',
                        'collision' : 'boolean'
                    },
                    'tooltip-class' : 'string',
                    'track' : 'boolean',
                    'show' : {
                        'disabled' : 'boolean',
                        'effect' : 'string',
                        'delay' : 'integer',
                        'duration' : 'integer',
                        'easing ' : 'string'
                    },
                    'hide' : {
                        'disabled' : 'boolean',
                        'effect' : 'string',
                        'delay' : 'integer',
                        'duration' : 'integer',
                        'easing ' : 'string'
                    },
                    //events
                    'open' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'close' : 'function(e,ui)'
                }
            }
        )
    }
);
    
    
/*****************************************************************
* Draggable  
*****************************************************************/

$.uinit(
    {
        name : 'ui-draggable ',
        create : function(el)
        {
            var config = this.expando(el);
            
            if(config.clone)
                config.helper = 'clone';
            
            if(config.revertValid)
                config.revert = 'valid';
            
            if(config.revertCallback)
                config.revert = config.revertCallback;
            
            if(config.snapSelector)
                config.snap = config.snapSelector;
            
            el.draggable(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'add-classes' : 'boolean',
                    'append-to' : 'string',
                    'axis' : 'string',
                    'cancel' : 'string',
                    'connect-to-sortable' : 'string',
                    'containment' : 'string',
                    'cursor' : 'string',
                    'cursor-at' : {
                        'top' : 'integer',
                        'left' : 'integer',
                        'right' : 'integer',
                        'bottom' : 'integer'
                    },
                    'delay' : 'integer',
                    'disabled' : 'boolean',
                    'distance' : 'integer',
                    'grid' : 'spacelist',
                    'handle' : 'string',
                    'clone' : 'boolean',
                    'helper' : 'function()',
                    'iframe-fix' : 'boolean',
                    'opacity' : 'float',
                    'refresh-positions' : 'boolean',
                    'revert-invalid' : 'boolean',
                    'revert-valid' : 'boolean',
                    'revert-callback' : 'function()',
                    'rever-duration' : 'integer',
                    'scope' : 'string',
                    'scroll' : 'boolean',
                    'scroll-sensitivity' : 'integer',
                    'scroll-speed' : 'integer',
                    'snap' : 'boolean',
                    'snap-selector' : 'string',
                    'snap-mode' : 'string',
                    'snap-tolerance' : 'integer',
                    'stack' : 'string',
                    'z-index' : 'integer',
                    //events
                    'drag' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'start' : 'function(e,ui)',
                    'stop' : 'function(e,ui)'
                }
            }
        )
    }
);
  
  
/*****************************************************************
* DROPPABLE  
*****************************************************************/

$.uinit(
    {
        name : 'ui-droppable ',
        create : function(el)
        {
            var config = this.expando(el);
            
            if(config.acceptCallback)
                config.accept = config.acceptCallback;
            
            el.droppable(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'accept' : 'string',
                    'accept-callback' : 'function()',
                    'active-class' : 'string',
                    'add-classes' : 'boolean',
                    'disabled' : 'boolean',
                    'greedy' : 'boolean',
                    'hover-class' : 'string',
                    'scope' : 'string',
                    'tolerance' : 'string',
                    //events
                    'activate' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'deactivate' : 'function(e,ui)',
                    'drop' : 'function(e,ui)',
                    'out' : 'function(e,ui)',
                    'over' : 'function(e,ui)'
                }
            }
        )
    }
);
    
     
  
/*****************************************************************
* RISIZABLE  
*****************************************************************/
$.uinit(
    {
        name : 'ui-resizable ',
        create : function(el)
        {
            var config = this.expando(el);
            
            if(config.animate.enabled)
            {
                if(config.animate.easing)
                    config.animateEasing = config.animate.easing;

                if(config.animate.duration)
                    config.animateDuration = config.animate.duration;
                
                config.animate = true;
            }
            else config.animate = false;
            
            el.resizable(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'also-resize' : 'string',
                    'animate' : {
                        'enabled' : 'boolean',
                        'easing' : 'string',
                        'duration' : 'integer'
                    },
                    'animate-duration' : 'string',
                    'animate-easing' : 'boolean',
                    'aspect-ratio' : 'boolean',
                    'auto-hide' : 'boolean',
                    'cancel' : 'string',
                    'containment' : 'string',
                    'delay' : 'integer',
                    'disabled' : 'boolean',
                    'distance' : 'integer',
                    'ghost' : 'boolean',
                    'grid' : 'spacelist',
                    'handles' : 'spacelist',
                    'helper' : 'string',
                    'max-height' : 'integer',
                    'max-width' : 'integer',
                    'min-height' : 'integer',
                    'min-width' : 'integer',
                    //events
                    'resize' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'start' : 'function(e,ui)',
                    'stop' : 'function(e,ui)'
                }
            }
        )
    }
);
  
  
  
/*****************************************************************
* SELECTABLE  
*****************************************************************/
$.uinit(
    {
        name : 'ui-selectable ',
        create : function(el)
        {
            var config = this.expando(el);
            
            el.selectable(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'append-to' : 'string',
                    'auto-refresh' :'boolean',
                    'cancel' : 'string',
                    'delay' : 'integer',
                    'disabled' : 'boolean',
                    'distance' : 'integer',
                    'filter' : 'string',
                    'tolerance' : 'string',
                    //events
                    'selected' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'selecting' : 'function(e,ui)',
                    'start' : 'function(e,ui)',
                    'stop' : 'function(e,ui)',
                    'unselected' : 'function(e,ui)',
                    'unselecting' : 'function(e,ui)'
                }
            }
        )
    }
);
  
/*****************************************************************
* SORTABLE  
*****************************************************************/
$.uinit(
    {
        name : 'ui-sortable ',
        create : function(el)
        {
            var config = this.expando(el);
            
            if(config.clone)
                config.helper = 'clone';
            
            if(config.revertDuration)
                config.revert = config.revertDuration;
            
            el.sortable(config);
        },
        expando :  $.expando(
            {
                prefix : '',
                attributes : 
                {
                    'append-to' : 'string',
                    'axis' :'string',
                    'cancel' : 'string',
                    'connect-with' : 'string',
                    'containment' : 'string',
                    'cursor' : 'string',
                    'cursor-at' : {
                        'top' : 'integer',
                        'left' : 'integer',
                        'right' : 'integer',
                        'bottom' : 'integer'
                    },
                    'delay' : 'integer',
                    'disabled' : 'boolean',
                    'distance' : 'integer',
                    'drop-on-empty' : 'boolean',
                    'force-helper-size' : 'boolean',
                    'force-placeholder-size' : 'boolean',
                    'grid' : 'spacelist',
                    'handle' : 'string',
                    'clone' : 'boolean',
                    'helper' : 'function()',
                    'items' : 'string',
                    'opacity' : 'float',
                    'placeholder' : 'string',
                    'revert' : 'boolean',
                    'revert-duration' : 'integer',
                    'scroll' : 'boolean',
                    'scroll-sensitivity' : 'integer',
                    'scroll-speed' : 'integer',
                    'tolerance' : 'string',
                    'z-index' : 'integer',
                    //events
                    'activate' : 'function(e,ui)',
                    'beforeStop' : 'function(e,ui)',
                    'change' : 'function(e,ui)',
                    'create' : 'function(e,ui)',
                    'deactivate' : 'function(e,ui)',
                    'out' : 'function(e,ui)',
                    'over' : 'function(e,ui)',
                    'receive' : 'function(e,ui)',
                    'remove' : 'function(e,ui)',
                    'sort' : 'function(e,ui)',
                    'start' : 'function(e,ui)',
                    'stop' : 'function(e,ui)',
                    'update' : 'function(e,ui)'
                }
            }
        )
    }
);
  