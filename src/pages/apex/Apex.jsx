import papaparse from 'papaparse';
import React, { useState, useRef, useEffect, useContext } from 'react';
import * as S from './ApexStyles';
import ChartBox from './ChartBox';
import AppContext from '../../context/appContext';

const Apex = () => {
  // get context
  const { Options, actions } = useContext(AppContext);

  const JSONFileRef = useRef();
  const CSVFileRef = useRef();
  const selector_x = useRef();
  const [AxisName, setAxisName] = useState({
    x_axis: Options.xaxis.title.text,
    y_axis: Options.yaxis.title.text,
  });
  const [ShowGrid, setShowGrid] = useState(Options.grid.show);
  const [Labels, setLabels] = useState([]);
  const [WidthVal, setWidthVal] = useState(2);
  const [MarkVal, setMarkVal] = useState(0);
  const [ObjKeys, setObjKeys] = useState([]);
  const [MenuisOpen, setMenuisOpen] = useState(false);
  const [File, setFile] = useState([]);
  const [FileType, setFileType] = useState(null);

  // set Menu
  const AltMenu = () => {
    setMenuisOpen(() => !MenuisOpen);
  };

  // file effect
  useEffect(() => {
    // console.log(File);
    if (File && File.length > 0) {
      setObjKeys(Object.keys(File[0]));
      // console.log(ObjKeys);
    }
  }, [File]);

  // change category effcet
  function arrCat() {
    let Category = [];

    for (let i = 0; i < File.length; i++) {
      const Val = selector_x.current.value;
      if (File[i].hasOwnProperty(Val)) {
        Category.push(File[i][Val]);
      }
    }

    actions.setCat(Category);
    console.log(Category);
  }

  // Reader functions
  function readFile(event) {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = onReaderLoad;
  }

  function onReaderLoad(event) {
    if (FileType === 'json') {
      const obj = JSON.parse(event.target.result);
      setFile(obj);
      // console.log(Object.keys(obj[0]));
    } else if (FileType === 'csv') {
      const obj = papaparse.parse(event.target.result, { header: true });
      // console.log(obj.data);
      setFile(obj.data);
      // console.log(Object.keys(obj.data));
    }
  }

  // ----------------------------------------------------->

  // re-render effect
  useEffect(() => {
    actions.setWidth(WidthVal);
    actions.markSize(MarkVal);
    actions.axisTitle(AxisName);
  }, [WidthVal, MarkVal, AxisName]);

  return (
    <S.Container>
      {/* chart section */}
      <ChartBox data={File} names={Labels} />
      {/* chart option button */}
      <S.OptiionBtn onClick={AltMenu}>MENU</S.OptiionBtn>

      {/* chart option box */}
      <S.MenuDiv show={MenuisOpen}>
        {/* JSON file picker */}
        <S.FileBtn
          onClick={() => {
            JSONFileRef.current.click();
            setFileType('json');
          }}
        >
          Upload JSON file
        </S.FileBtn>
        <input
          type='file'
          placeholder='Pick a file'
          onChange={readFile}
          ref={JSONFileRef}
          accept='.json, .txt'
          style={{ display: 'none' }}
        />

        {/* CSV file picker */}
        <S.FileBtn
          onClick={() => {
            CSVFileRef.current.click();
            setFileType('csv');
          }}
        >
          Upload CSV file
        </S.FileBtn>
        <input
          type='file'
          placeholder='Pick a file'
          onChange={readFile}
          ref={CSVFileRef}
          accept='.csv, .txt'
          style={{ display: 'none' }}
        />

        {/* axis label div */}
        <p>Select category for each axis</p>
        <S.SectionDiv>
          {/* x axis */}
          <S.AxisBtn
            ref={selector_x}
            onChange={(e) => {
              setAxisName({
                ...AxisName,
                x_axis: e.target.value,
              });
              arrCat();
            }}
          >
            <option value={null}>~ Category ~</option>
            {ObjKeys.map((data, index) => {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            })}
          </S.AxisBtn>
          {/*  Value */}
          <S.AxisBtn
            onChange={(e) =>
              setAxisName({
                ...AxisName,
                y_axis: e.target.value,
              })
            }
          >
            <option value={null}>~ Value ~</option>
            {ObjKeys.map((data, index) => {
              return <option key={index}>{data}</option>;
            })}
          </S.AxisBtn>
        </S.SectionDiv>

        {/* stroke width */}
        <p>Stroke width</p>
        <S.SectionDiv>
          <input
            type='range'
            min='2'
            max='20'
            value={WidthVal}
            onChange={(e) => {
              setWidthVal(e.target.value);
            }}
          />
          <h4>{WidthVal}</h4>
        </S.SectionDiv>

        {/* Marker size */}
        <p>Select Marker size</p>
        <S.SectionDiv>
          <input
            type='range'
            value={MarkVal}
            min='0'
            max='20'
            onChange={(e) => setMarkVal(e.target.value)}
          />
          <h4>{MarkVal}</h4>
        </S.SectionDiv>

        {/* Stroke color */}
        <S.SectionDiv
          style={{ borderTop: 'thin solid black', paddingTop: '10px' }}
        >
          <p style={{ border: 'none' }}>Select color</p>
          <input
            type='color'
            onChange={(e) => actions.setColor(e.target.value)}
            style={{ cursor: 'pointer' }}
          />
        </S.SectionDiv>

        {/* Edge style */}
        <p>Edge style</p>
        <S.SectionDiv>
          <button onClick={() => actions.setEdges('smooth')}>Smooth</button>
          <button onClick={() => actions.setEdges('straight')}>Straight</button>
          <button onClick={() => actions.setEdges('stepline')}>Step</button>
        </S.SectionDiv>
        <S.SectionDiv>
          <S.AxisBtn onChange={(e) => setLabels(e.target.value)}>
            <option value={null}>~ Labels ~</option>{' '}
            {ObjKeys.map((data, index) => {
              return <option key={index}>{data}</option>;
            })}
          </S.AxisBtn>
        </S.SectionDiv>
        <p>Toggel grid lines</p>
        <button
          onClick={() => {
            actions.toggleGrid();
            setShowGrid(!ShowGrid);
          }}
        >
          {ShowGrid ? 'Hide Grid' : 'Show Grid'}
        </button>
      </S.MenuDiv>
    </S.Container>
  );
};

export default Apex;
