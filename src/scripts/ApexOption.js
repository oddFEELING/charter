import React, { useReducer } from 'react';
import AppContext from '../context/appContext';
import reducer from '../context/chartReducer';

const APexOption = ({ children }) => {
  /** Object info
   * @param Stroke
   *    curve - Sets peak style
   *    width - sets stroke size
   *    dashArray - dotted lines
   * @param Markers
   *    size - sets sizeof marker dots
   * @param noData
   *    text - Text to display in data absence
   *    style - styles to apply to text
   * @param Grid
   *    show - grid visibility
   *    position - grid
   * @param Color
   *    array - sets array of stroke colors
   * @param X_Axis
   *    Type - Category
   */

  //-->  Initial state
  let InitialState = {
    stroke: {
      width: 2,
      curve: 'smooth',
      dashArray: 0,
    },
    markers: {
      size: 0,
      hover: {
        size: 0,
      },
    },
    noData: {
      text: 'No Data Passed',
      style: {
        color: 'black',
      },
    },
    grid: {
      show: true,
      position: 'back',
    },
    colors: ['#eedd34', '#33a', '#a63', '#6fa'],
    xaxis: {
      type: 'category',
      categories: [],
      title: {
        text: 'Categories',
      },
      axisBorder: {
        show: true,
        color: '#000',
      },
    },
    yaxis: {
      seriesName: 'Emma',
      axisBorder: {
        show: true,
        color: '#000',
      },
      title: {
        text: 'Values',
        formatter: (val) => {
          return val;
        },
      },
    },
  };

  //--------------------------------------->  Main state manager
  const [state, dispatch] = useReducer(reducer, InitialState);

  //-->  set stroke width
  const setWidth = (payload) => {
    dispatch({
      type: 'set_stroke_width',
      value: payload,
    });
  };

  //-->  set stroke color
  const setColor = (payload) => {
    dispatch({
      type: 'set_stroke_color',
      value: payload,
    });
  };

  //-->  set edges
  const setEdges = (payload) => {
    dispatch({
      type: 'set_edge_style',
      value: payload,
    });
  };

  //-->  set marker size
  const markSize = (payload) => {
    dispatch({
      type: 'set_marker_size',
      value: payload,
    });
  };

  //-->  set axes title
  const axisTitle = (payload) => {
    dispatch({
      type: 'axis_title',
      value: payload,
    });
  };

  //-->  set categories
  const setCat = (payload) => {
    dispatch({
      type: 'set_category',
      value: payload,
    });
  };

  //-->  toggle grid
  const toggleGrid = () => {
    dispatch({
      type: 'toggle_grid',
    });
  };

  const actions = {
    setWidth,
    setColor,
    setEdges,
    markSize,
    axisTitle,
    setCat,
    toggleGrid,
  };

  return (
    <AppContext.Provider
      value={{
        Options: state,
        actions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default APexOption;
