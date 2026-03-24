window.onload = function () {

    var canvas = document.getElementById("myCanvas");
    paper.setup(canvas);

    // SOUND
  var sound = new Howl({
    src: ['sounds/bubbles.mp3'] 
});

    var particles = [];

    function createExplosion(point) {

        sound.play();

        for (var i = 0; i < 30; i++) {

            var radius = Math.random() * 80 + 20;

            var circle = new paper.Path.Circle(point, radius);

            // RANDOM COLOR
            circle.fillColor = new paper.Color({
                hue: Math.random() * 360,
                saturation: 1,
                brightness: 1
            });

            // GLOW EFFECT
            circle.shadowColor = circle.fillColor;
            circle.shadowBlur = 20;

            // VELOCITY
            circle.data = {
                velocity: new paper.Point({
                    angle: Math.random() * 360,
                    length: Math.random() * 10
                }),
                shrink: Math.random() * 0.05 + 0.92
            };

            particles.push(circle);
        }
    }

    // KEY PRESS
   document.addEventListener("keydown", function (event) {
    if(keyData[event.key]) {
        keyData[event.key].sound.play();
        var point = paper.Point.random().multiply(paper.view.size);
        createExplosion(point);
    }
});


    // MOUSE CLICK
    canvas.addEventListener("click", function (e) {
        var rect = canvas.getBoundingClientRect();

        var point = new paper.Point(
            e.clientX - rect.left,
            e.clientY - rect.top
        );

        createExplosion(point);
    });

    // ANIMATION
    paper.view.onFrame = function () {

        for (var i = 0; i < particles.length; i++) {

            var p = particles[i];

            p.position = p.position.add(p.data.velocity);

            p.fillColor.hue += 3;

            p.scale(p.data.shrink);

            p.opacity -= 0.02;

            if (p.opacity <= 0) {
                p.remove();
                particles.splice(i, 1);
                i--;
            }
        }
    };
};

//Multiple sound 
var keyData = {
    a: {
        sound: new Howl({ src: ['sounds/bubbles.mp3'] }),
        color: '#1abc9c'
    },
    s: {
        sound: new Howl({ src: ['sounds/clay.mp3'] }),
        color: '#3498db'
    },
    d: {
        sound: new Howl({ src: ['sounds/confetti.mp3'] }),
        color: '#9b59b6'
    },
    f: {
        sound: new Howl({ src: ['sounds/corona.mp3'] }),
        color: '#e74c3c'
    },
    g: {
        sound: new Howl({ src: ['sounds/dotted-spiral.mp3'] }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({ src: ['sounds/flash-1.mp3'] }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({ src: ['sounds/flash-2.mp3'] }),
        color: '#27ae60'
    },
    k: {
        sound: new Howl({ src: ['sounds/flash-3.mp3'] }),
        color: '#2980b9'
    },
    l: {
        sound: new Howl({ src: ['sounds/glimmer.mp3'] }),
        color: '#8e44ad'
    },
    q: {
        sound: new Howl({ src: ['sounds/moon.mp3'] }),
        color: '#2c3e50'
    },
    w: {
        sound: new Howl({ src: ['sounds/pinwheel.mp3'] }),
        color: '#16a085'
    },
    e: {
        sound: new Howl({ src: ['sounds/piston-1.mp3'] }),
        color: '#27ae60'
    },
    r: {
        sound: new Howl({ src: ['sounds/piston-2.mp3'] }),
        color: '#2980b9'
    },
    t: {
        sound: new Howl({ src: ['sounds/piston-3.mp3'] }),
        color: '#8e44ad'
    },
    y: {
        sound: new Howl({ src: ['sounds/prism-1.mp3'] }),
        color: '#2c3e50'
    },
    u: {
        sound: new Howl({ src: ['sounds/prism-2.mp3'] }),
        color: '#16a085'
    },
    i: {
        sound: new Howl({ src: ['sounds/prism-3.mp3'] }),
        color: '#27ae60'
    },
    o: {
        sound: new Howl({ src: ['sounds/splits.mp3'] }),
        color: '#2980b9'
    },
    p: {
        sound: new Howl({ src: ['sounds/squiggle.mp3'] }),
        color: '#8e44ad'
    },
    z: {
        sound: new Howl({ src: ['sounds/strike.mp3'] }),
        color: '#2c3e50'
    },
    x: {
        sound: new Howl({ src: ['sounds/suspension.mp3'] }),
        color: '#16a085'
    },
    c: {
        sound: new Howl({ src: ['sounds/timer.mp3'] }),
        color: '#27ae60'
    },
    v: {
        sound: new Howl({ src: ['sounds/ufo.mp3'] }),
        color: '#2980b9'
    },
    b: {
        sound: new Howl({ src: ['sounds/veil.mp3'] }),
        color: '#8e44ad'
    },
    n: {
        sound: new Howl({ src: ['sounds/wipe.mp3'] }),
        color: '#2c3e50'
    },
    m: {
        sound: new Howl({ src: ['sounds/zig-zag.mp3'] }),
        color: '#16a085'
    }
};
