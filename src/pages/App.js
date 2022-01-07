import * as S from './AppStyle';
import Am_Charts from '../assets/images/am_charts.png';
import Nivo_Charts from '../assets/images/nivo_charts.png';
import Apex_Charts from '../assets/images/apex_charts.png';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <h1>Choose Charting library</h1>
      <S.CardHolder>
        <S.OptionCard
          img={Am_Charts}
          onClick={() => alert('🏃‍♂️ Aswear AmCharts want to kill me...')}
        />
        <S.OptionCard
          img={Nivo_Charts}
          onClick={() => alert('✌ This one is not ready yet')}
        />
        <S.OptionCard img={Apex_Charts} onClick={() => navigate('/apex')} />
      </S.CardHolder>
    </S.Container>
  );
}

export default App;
