import type { Meta, StoryObj } from "@storybook/react";
import CityCard from "./CityCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/CityCard",
  component: CityCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
      weatherText: { control: 'select', options: ['Sunny', 'Cloudy', 'Thunderstorm'] },
  }
} satisfies Meta<typeof CityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    cityName: "Medellín",
    hasPrecipitation: false,
    currentTemperature: 30,
    currentHumidity: 70,
    weatherText: "Cloudy",

  },
};
