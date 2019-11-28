import React, { Component } from 'react';
import { Treemap } from 'react-vis';
import 'react-vis/dist/style.css';
import './style.css';

const myData = {
  title: 'analytics',
  color: '1',
  children: [
    {
      label: 'East',
      title: 'here',
      color: 1,
      name: 'ttt',
      size: 0,
      style: { border: '1px solid white' },
      children: [
        {
          title: 'tooltip',
          color: 'blue',
          name: 'content',
          size: 53,
          style: { border: '1px solid white' }
        },
        {
          title: '2',
          color: 'green',
          name: '2',
          size: 10,
          style: { border: '1px solid white' }
        },
        {
          title: '3',
          color: '#e09814',
          name: '3',
          size: 15,
          style: { border: '1px solid white' }
        },
        {
          title: '4',
          color: '#665f6b',
          name: '4',
          size: 10,
          style: { border: '1px solid white' }
        },
        {
          title: '5',
          color: 'yellow',
          name: '5',
          size: 30,
          style: { border: '1px solid white' }
        }
      ]
    },
    {
      label: 'West',
      title: '1',
      color: 1,
      name: '1',
      size: 0,
      style: { border: '1px solid white' },
      children: [
        {
          title: '1',
          color: 'blue',
          name: '1',
          size: 23,
          style: { border: '1px solid white' }
        },
        {
          title: '2',
          color: 'green',
          name: '2',
          size: 30,
          style: { border: '1px solid white' }
        },
        {
          title: '3',
          color: '#e09814',
          name: '3',
          size: 20,
          style: { border: '1px solid white' }
        },
        {
          title: '4',
          color: '#665f6b',
          name: '4',
          size: 20,
          style: { border: '1px solid white' }
        },
        {
          title: '5',
          color: 'yellow',
          name: '5',
          size: 15,
          style: { border: '1px solid white' }
        }
      ]
    },
    {
      label: 'South',
      title: '1',
      color: 1,
      name: '1',
      size: 0,
      style: { border: '1px solid white' },
      children: [
        {
          title: '1',
          color: 'blue',
          name: '1',
          size: 13,
          style: { border: '1px solid white' }
        },
        {
          title: '2',
          color: 'green',
          name: '2',
          size: 60,
          style: { border: '1px solid white' }
        },
        {
          title: '3',
          color: '#e09814',
          name: '3',
          size: 10,
          style: { border: '1px solid white' }
        },
        {
          title: '4',
          color: '#665f6b',
          name: '4',
          size: 16,
          style: { border: '1px solid white' }
        },
        {
          title: '5',
          color: 'yellow',
          name: '5',
          size: 20,
          style: { border: '1px solid white' }
        }
      ]
    },
    {
      label: 'North',
      title: '1',
      color: 1,
      name: '1',
      size: 0,
      style: { border: '1px solid white' },
      children: [
        {
          title: '1',
          color: 'blue',
          name: '1',
          size: 26,
          style: { border: '1px solid white' }
        },
        {
          title: '2',
          color: 'green',
          name: '2',
          size: 20,
          style: { border: '1px solid white' }
        },
        {
          title: '3',
          color: '#e09814',
          name: '3',
          size: 20,
          style: { border: '1px solid white' }
        },
        {
          title: '4',
          color: '#665f6b',
          name: '4',
          size: 32,
          style: { border: '1px solid white' }
        },
        {
          title: '5',
          color: 'yellow',
          name: '5',
          size: 25,
          style: { border: '1px solid white' }
        }
      ]
    }
  ]
};
class TreemapExample extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.tooltipContainer = React.createRef();
  }

  state = {
    treemapData: myData,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    tooltipContent: '',
    visibility: 'hidden'
  };
  updateDimensions = () => {
    this.setState({
      width: this.mapContainer.current.offsetWidth,
      height: this.mapContainer.current.offsetHeight
    });
  };
  componentDidMount() {
    this.setState({
      width: this.mapContainer.current.offsetWidth,
      height: this.mapContainer.current.offsetHeight
    });
    window.addEventListener('resize', this.updateDimensions);
  }

  showTooltip(x, event) {
    console.log();
    this.setState({ x: x.x0 });
    this.setState({ y: (x.y0 + x.y1) / 2 });
    this.setState({ visibility: 'visible' });
    this.setState({ tooltipContent: x.data.title });
  }
  hideTooltip() {
    this.setState({ visibility: 'hidden' });
  }
  render() {
    const treeProps = {
      animation: {
        damping: 9,
        stiffness: 300
      },
      data: this.state.treemapData,
      onLeafMouseOver: (x, e) => this.showTooltip(x, e),
      onLeafMouseOut: () => this.hideTooltip(),
      height: this.state.height,
      mode: 'slicedice',
      getLabel: x => x.name,
      width: this.state.width,
      colorType: 'literal',
      margin: 10
    };
    return (
      <div
        className="dynamic-treemap-example"
        style={{ width: '100%', height: '100%' }}
        ref={this.mapContainer}
      >
        <div
          className="treemap-tooltip"
          ref={this.tooltipContainer}
          style={{
            left: this.state.x,
            top: this.state.y,
            visibility: this.state.visibility
          }}
        >
          {this.state.tooltipContent}
        </div>
        <div style={{ width: this.state.width, display: 'flex' }}>
          {this.state.treemapData.children.map(data => {
            return (
              <div
                style={{
                  width: 100 / this.state.treemapData.children.length + '%'
                }}
              >
                {data.label}
              </div>
            );
          })}
        </div>

        <Treemap {...treeProps} />
      </div>
    );
  }
}

export default TreemapExample;
