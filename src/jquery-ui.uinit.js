/*****************************************************************
* ACCORDION
*****************************************************************/
$.fn.uinit.addFactory(
    'ui-accordion', 
    function(el, config)
    {
        if(config.notAnimate)
        {
            config.animate = false;
        }

        if(config.unactive)
        {
            config.active = false;
        }

        el.accordion(config);
    },
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
        'activate' : 'function',
        'before-activate' : 'function',
        'create' : 'function'
    }
);
   
/*****************************************************************
* AUTOCOMPLETE 
*****************************************************************/
$.fn.uinit.addFactory(
   'ui-autocomplete', 
   function(el, config)
   {
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
       'source' : 'function',
       //events
       'change' : 'function',
       'close' : 'function',
       'create' : 'function',
       'focus' : 'function',
       'open' : 'function',
       'response' : 'function',
       'search' : 'function',
       'select' : 'function'
   }
);
   
   
   
/*****************************************************************
* BUTTON 
*****************************************************************/
$.fn.uinit.addFactory(
   'ui-button', 
   function(el, config)
   {
        el.button(config);
   },
   {    
        'disabled' : 'boolean',
        'icons' : {
            'primary' : 'string',
            'secondary' : 'string'
        },
        'label': 'string',
        'text' : 'boolean'
   }
);
   
   
/*****************************************************************
* DATEPICKER 
*****************************************************************/
$.fn.uinit.addFactory(
   'ui-datepicker', 
   function(el, config)
   {
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
        'calculate-week' : 'function',
        //event 
        'change-month-year' : 'function',
        'close' : 'function',
        'select' : 'function',
        'before-show' : 'function',
        'before-show-day' : 'function'
   }
);
   
   
/*****************************************************************
* DIALOG 
*****************************************************************/
$.fn.uinit.addFactory(
   'ui-dialog', 
   function(el, config)
   {
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
   {    
        'append-to' : 'string',
        'auto-open' : 'boolean',
        'buttons' : new $.fn.uinit.DomListDescriptor(
            '>ui-button',
            {
                'text' : 'string',
                'click' : 'function'
            },
            ''
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
        'before-close' : 'function',
        'close' : 'function',
        'create' : 'function',
        'drag' : 'function',
        'drag-start' : 'function',
        'drag-stop' : 'function',
        'focus' : 'function',
        'open' : 'function',
        'resize' : 'function',
        'resize-start' : 'function',
        'resize-stop' : 'function'
   }
);
   /*
*/
   
/*****************************************************************
* INPUT MASK 
*****************************************************************/
/*
$.fn.uinit.addFactory(
   'inputmask', 
   function(el, config)
   {
        el.inputmask(config.mask, config);
   },
   {    
        'mask' : 'string'
   }
);*/