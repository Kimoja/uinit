/*****************************************************************
* ACCORDION
*****************************************************************/
$.fn.uinit.addFactory(
    'accordion', 
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
        }
    }
);
   
/*****************************************************************
* AUTOCOMPLETE 
*****************************************************************/
$.fn.uinit.addFactory(
   'autocomplete', 
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
       'source' : 'eval'
   }
);
   
   
   
/*****************************************************************
* BUTTON 
*****************************************************************/
$.fn.uinit.addFactory(
   'button', 
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
   'datepicker', 
   function(el, config)
   {
        el.datepicker(config);
   },
   {    
        'date-format' : 'string'
   }
);
/*altField
altFormat
appendText
autoSize
beforeShow
beforeShowDay
buttonImage
buttonImageOnly
buttonText
calculateWeek
changeMonth
changeYear
closeText
constrainInput
currentText
dateFormat
dayNames
dayNamesMin
dayNamesShort
defaultDate
duration
firstDay
gotoCurrent
hideIfNoPrevNext
isRTL
maxDate
minDate
monthNames
monthNamesShort
navigationAsDateFormat
nextText
numberOfMonths
onChangeMonthYear
onClose
onSelect
prevText
selectOtherMonths
shortYearCutoff
showAnim
showButtonPanel
showCurrentAtPos
showMonthAfterYear
showOn
showOptions
showOtherMonths
showWeek
stepMonths
weekHeader
yearRange
yearSuffix*/
   
   
   
/*****************************************************************
* INPUT MASK 
*****************************************************************/
$.fn.uinit.addFactory(
   'inputmask', 
   function(el, config)
   {
        el.inputmask(config.mask, config);
   },
   {    
        'mask' : 'string'
   }
);