uinit
=====

Initilise from an object factories, DOM elements with the attribute ui-class (same syntax as the class attribute, a space-separated list) and created for each call of factory method, a configuration object via attributes of the HTML element.

`````javascript
/*****************************************************************
 * EXAMPLE UINIT JQUERY UI DIALOG
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
`````

`````html
<div ui-dialog buttons=">button" modal show-enabled show-duration="1000" auto-open draggable>
    <div>
        My Dialog content
    </div>
    <ui-button text="Ok" click="testReference.eventLog"></ui-button>
    <ui-button text="Ok2" click="testReference.eventLog"></ui-button>
    <ui-button text="Ok3" click="testReference.eventLog"></ui-button>
</div>
`````
