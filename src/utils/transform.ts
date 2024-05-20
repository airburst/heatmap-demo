import { type ApiData } from "../apiData";

type HeatmapData = { x: string; y: string; value: number }[];

const getXSeries = (data: ApiData[]): string[] =>
  [...new Set(data.map((d) => d.server))].sort();

const getYSeries = (data: ApiData[]): string[] =>
  [...new Set(data.map((d) => d.client))].sort();

export const transformData = (data: ApiData[]): HeatmapData => {
  const result: HeatmapData = [];
  const xSeries = getXSeries(data);
  const ySeries = getYSeries(data);

  // Fill the result array with values, or zero if no data is available
  for (const x of xSeries) {
    for (const y of ySeries) {
      const value = data.find((d) => d.server === x && d.client === y)?.value;
      result.push({ x, y, value: value ? parseInt(value) : 0 });
    }
  }

  return result;
};
