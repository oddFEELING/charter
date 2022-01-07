import React, { useEffect, useContext, useState } from 'react';
import * as S from './ApexStyles';
import Chart from 'react-apexcharts';
import EmptySvg from '../../assets/images/empty.svg';
import AppContext from '../../context/appContext';

const ChartBox = (props) => {
  const { data: propData, names } = props;
  const [Dimensions, setDimensions] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.8,
  });

  // option context
  const { Options } = useContext(AppContext);

  console.log(propData);

  // console.log(propData);
  let series = [];

  // set series
  (function setSeries() {
    // if (propData.length < 1) {
    //   for (let i = 0; i < propData.length; i++) {
    //     const name = propData[i][names];
    //     const data = Object.values(propData[i]);

    //     series.push({
    //       name: name,
    //       data: data,
    //     });
    //   }
    // } else {
    //   let data = [];
    //   for (let i = 0; i < propData.length; i++) {
    //     data.push(propData[i][names]);
    //   }

    //   series = [
    //     {
    //       name: names,
    //       data: data,
    //     },
    //   ];
    // }

    let data = [];
    for (let i = 0; i < propData.length; i++) {
      data.push(propData[i][names]);
    }

    series = [
      {
        name: names,
        data: data,
      },
    ];
  })();

  // dimensional effect
  useEffect(() => {
    function handleDim() {
      setDimensions({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
      });
    }
    window.addEventListener('resize', handleDim);

    return () => {
      window.removeEventListener('resize', handleDim);
    };
  }, [Dimensions]);

  // re-render effect
  useEffect(() => {
    console.log('state changed');
  }, [Options]);

  return (
    <S.ChartContainer>
      {propData && propData.length > 0 ? (
        <Chart
          type='line'
          height={Dimensions.height}
          width={Dimensions.width}
          options={Options}
          series={series}
        />
      ) : (
        <>
          <img src={EmptySvg} alt='' className='empty__img' />
          <h1 className='empty__text'>No Data received Yet</h1>
          <p>Click on the menu button to get started</p>
        </>
      )}
    </S.ChartContainer>
  );
};

export default ChartBox;
