import api from '../../services/api';

class SolController {
  async index(req, res) {
    const response = await api.get();
    const { data } = response;
    const { sol_keys: solKeys } = data;

    const solList = solKeys.map(solKey => data[solKey]);

    const temperatures = solList.map(sol => sol.AT.av);
    const sumOfTemperatures = temperatures.reduce(
      (total, temperature) => total + temperature
    );
    const averageTemperatures = parseFloat(
      (sumOfTemperatures / temperatures.length).toFixed(2)
    );

    return res.json({
      averageTemperatures,
      solKeys,
      solList,
    });
  }

  async show(req, res) {
    const { sol } = req.query;

    const response = await api.get();
    const { data } = response;
    const { sol_keys: solKeys } = data;

    const solExist = solKeys.find(solKey => solKey === sol);

    if (!solExist) {
      return res.json({ error: 'Invalid data' });
    }

    const solKeySelected = solExist;
    const solInfo = data[solExist];

    const temperatureAverage = solInfo.AT.av;

    return res.json({
      solKeySelected,
      solInfo,
      temperatureAverage,
    });
  }
}

export default new SolController();
