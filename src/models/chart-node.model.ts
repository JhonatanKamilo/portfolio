export interface ChartNodeProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  isChartVisible: boolean;
  positionClasses: string;
  animationDelays: { pop: string; title: string };
  titlePosition: 'top' | 'bottom';
  tooltipPositionClasses: string;
}
