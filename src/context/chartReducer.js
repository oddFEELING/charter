//-->  Reducer function
export default function reducer(state, action) {
  switch (action.type) {
    // set stroke width
    case 'set_stroke_width':
      return (state = {
        ...state,
        stroke: {
          ...state['stroke'],
          width: action.value,
        },
      });

    //   set stroke color
    case 'set_stroke_color':
      return (state = {
        ...state,
        colors: [action.value],
      });

    //   set edges
    case 'set_edge_style':
      return (state = {
        ...state,
        stroke: {
          ...state['stroke'],
          curve: action.value,
        },
      });

    //   set markers
    case 'set_marker_size':
      return (state = {
        ...state,
        markers: {
          ...state['markers'],
          size: action.value,
          hover: {
            size: action.value * 1.5,
          },
        },
      });

    //   set axes title
    case 'axis_title':
      return (state = {
        ...state,
        xaxis: {
          ...state['xaxis'],
          title: {
            text: action.value.x_axis,
          },
        },
        yaxis: {
          ...state['yaxis'],
          title: {
            text: action.value.y_axis,
          },
        },
      });

    //   set categories
    case 'set_category':
      return (state = {
        ...state,
        xaxis: {
          ...state['xaxis'],
          categories: action.value,
        },
      });

    //   toggle grid
    case 'toggle_grid':
      return (state = {
        ...state,
        grid: {
          ...state['grid'],
          show: !state.grid.show,
        },
      });
    default:
      return state;
  }
}
