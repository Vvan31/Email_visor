import React from 'react';
import { storiesOf } from '@storybook/react';
import { PieChart, pieChartDefaultProps } from '../src';
import FullOption from './FullOption';
import InteractionStory from './InteractionStory';
import InteractionTabStory from './InteractionTabStory';
import LoadingIndicatorStory from './LoadingIndicatorStory';
import PartialLoadingIndicatorStory from './PartialLoadingIndicatorStory';
import Tooltip from './Tooltip';

const dataMock = [
  { title: 'One', value: 10, color: '#E38627' },
  { title: 'Two', value: 15, color: '#C13C37' },
  { title: 'Three', value: 20, color: '#6A2135' },
];

const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
};


storiesOf('Donut Chart', module)
  .add("Custom arcs' width", () => <PieChart data={dataMock} lineWidth={15} />)
  .add('Rounded arcs', () => (
    <PieChart data={dataMock} lineWidth={15} rounded />
  ))
  .add('Padded arcs', () => (
    <PieChart data={dataMock} lineWidth={15} paddingAngle={5} />
  ));

storiesOf('Loading indicator', module)
  .add('360° indicator', () => <LoadingIndicatorStory />)
  .add('270° indicator with background', () => (
    <PartialLoadingIndicatorStory />
  ));


storiesOf('Labels', module)
  .add('Default labels', () => (
    <PieChart
      data={dataMock}
      label={({ dataEntry }) => dataEntry.value}
      labelStyle={{
        ...defaultLabelStyle,
      }}
    />
  ))
  .add('Outer labels', () => (
    <PieChart
      data={dataMock}
      label={({ dataEntry }) => dataEntry.value}
      labelStyle={(index) => ({
        fill: dataMock[index].color,
        fontSize: '5px',
        fontFamily: 'sans-serif',
      })}
      radius={42}
      labelPosition={112}
    />
  ))
  .add('Inner labels', () => (
    <PieChart
      data={dataMock}
      lineWidth={20}
      paddingAngle={18}
      rounded
      label={({ dataEntry }) => dataEntry.value}
      labelStyle={(index) => ({
        fill: dataMock[index].color,
        fontSize: '5px',
        fontFamily: 'sans-serif',
      })}
      labelPosition={60}
    />
  ))
  .add('Single label', () => (
    <PieChart
      data={[{ value: 82, color: '#E38627' }]}
      totalValue={100}
      lineWidth={20}
      label={({ dataEntry }) => dataEntry.value}
      labelStyle={{
        fontSize: '25px',
        fontFamily: 'sans-serif',
        fill: '#E38627',
      }}
      labelPosition={0}
    />
  ))
  .add('Percentage', () => (
    <PieChart
      data={dataMock}
      label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
      labelStyle={defaultLabelStyle}
    />
  ))
  .add('Custom label element', () => (
    <PieChart
      data={dataMock}
      label={({ x, y, dx, dy, dataEntry }) => (
        <text
          x={x}
          y={y}
          dx={dx}
          dy={dy}
          dominant-baseline="central"
          text-anchor="middle"
          style={{
            fontSize: '5px',
            fontFamily: 'sans-serif',
          }}
        >
          {Math.round(dataEntry.percentage) + '%'}
        </text>
      )}
      labelStyle={defaultLabelStyle}
    />
  ));

storiesOf('Animation', module)
  .add('On mount clockwise', () => <PieChart data={dataMock} animate />)
  .add('On mount counterclockwise', () => (
    <PieChart data={dataMock} lengthAngle={-360} animate />
  ));

storiesOf('Interaction', module)
  .addParameters({ options: { showPanel: true, panelPosition: 'bottom' } })
  .add('click, mouseOver, mouseOut callbacks', () => (
    <InteractionStory data={dataMock} />
  ))
  .add('Tab + Enter key press', () => <InteractionTabStory data={dataMock} />);
