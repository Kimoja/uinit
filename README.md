uinit
=====

Initialization function for your own component. Object creation configuartion from HTML attributes. jQuery UI widget initialization from HTML attributes

`````javascript
/*****************************************************************
 * EXAMPLE UINIT JQUERY UI DIALOG
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
`````

`````html
<div ui-dialog  modal show-enabled show-duration="1000" auto-open draggable>
    <div>
        My Dialog content
    </div>
    <ui-button text="Ok" click="testReference.eventLog(e,ui)"></ui-button>
    <ui-button text="Ok2" click="testReference.eventLog(e,ui)"></ui-button>
    <ui-button text="Ok3" click="testReference.eventLog(e,ui)"></ui-button>
</div>
`````
