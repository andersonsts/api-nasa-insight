import { format, parseISO } from 'date-fns';
import api from '../../services/api';

class SolController {
  async index(req, res) {
    const response = await api.get();
    const { data } = response;

    const { sol_keys: solKeys } = data;
    const solList = solKeys.map(solKey => data[solKey]);

    const temperatures = solList.map(sol => parseFloat(sol.AT.av.toFixed(2)));
    const sumOfTemperatures = temperatures.reduce(
      (total, temperature) => total + temperature
    );
    const averageTemperatures = parseFloat(
      (sumOfTemperatures / temperatures.length).toFixed(2)
    );

    const dates = solList.map(sol => format(parseISO(sol.Last_UTC), 'MMM yy'));

    return res.json({
      temperatures,
      keys: solKeys,
      averageTemperatures,
      dates,
    });
  }

  async show(req, res) {
    const { sol } = req.query;

    const response = await api.get();
    const { data } = response;
    const { sol_keys: solKeys } = data;

    const key = solKeys.find(solKey => solKey === sol);

    if (!key) {
      return res.json({ error: 'Invalid data' });
    }

    const SolInfo = {
      key,
      temperature: parseFloat(data[key].AT.av.toFixed(2)),
      wind: parseFloat(data[key].HWS.av.toFixed(2)),
      pressure: parseFloat(data[key].PRE.av.toFixed(2)),
      date: format(parseISO(data[key].Last_UTC), 'MMM yy'),
    };

    return res.json(SolInfo);
  }
}

export default new SolController();
