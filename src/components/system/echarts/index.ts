import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import {
    LineChart,
    LineSeriesOption,
    PieChart,
    PieSeriesOption,
    BarChart,
    BarSeriesOption
  } from 'echarts/charts';
import { UniversalTransition,LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  PieChart,
  BarChart,
  CanvasRenderer,
  UniversalTransition,
  LabelLayout
]);

export type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
  | PieSeriesOption
  | BarSeriesOption
>

export default echarts
