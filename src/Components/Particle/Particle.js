import Particles from 'react-tsparticles';

const particlesOptions = {
    fpsLimit: 60,
    background: {
      color: "#000000"
    },
    interactivity: {
      detect_on: "ios",
      events: {
        onHover: {
          enable: true,
          mode: ["bubbly", "connect"]
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 500,
          duration: 2,
          opacity: 1,
          size: 40,
          speed: 3,
          color: {
            value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921", "123456"]
          }
        },
        connect: {
          distance: 60,
          lineLinked: {
            opacity: 0.2
          },
          radius: 200
        }
      }
    },
    particles: {
      color: {
        value: "#000000"
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "out",
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 500
        },
        value: 300
      },
      opacity: {
        value: 0
      },
      shape: {
        type: "circla"
      },
      size: {
        random: {
          enable: true,
          minimumValue: 15
        },
        value: 20
      }
    },
    retina_detect: false
  }

const Particle = () => {
    return (
        <Particles className='particles'
          params={particlesOptions}
        />
    )
}

export default Particle