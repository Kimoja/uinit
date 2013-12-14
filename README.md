uinit
=====

Initilise from an object factories, DOM elements with the attribute ui-class (same syntax as the class attribute, a space-separated list) and created for each call of factory method, a configuration object via attributes of the HTML element.

`````javascript
/*****************************************************************
 * EXAMPLE UINIT JQUERY UI ACCORDION
 *****************************************************************/
$.fn.uinit.addFactory(
    'accordion', 
    function(el, config)
    {
        if(config.notAnimate)
            config.animate = false;
        
        el.accordion(config);
    },
    {
        'active' : 'eval',
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
    },
    'accordion'
);
`````

`````html
<div ui-class="accordion" 
     accordion-active="2"
     accordion-animate-easing=""
     accordion-animate-duration="2000"
     accordion-collapsible
     accordion-event="mouseover"
     accordion-header="h2"
     accordion-header="h2"
     accordion-height-style="content"
     accordion-icons-header="ui-icon-plus"
     accordion-icons-active-header="ui-icon-minus"
>
    <h2>Section 1</h2>
    <div>
      <p>
      Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
      ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
      amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
      odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
      </p>
    </div>
    <h2>Section 2</h2>
    <div>
      <p>
      Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
      purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
      velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
      suscipit faucibus urna.
      </p>
    </div>
    <!-- etc... -->
  </div>
`````
