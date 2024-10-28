"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { ContainerContext } from "../../container";
import { Button } from "@/components/ui/button";
import { PieChartIcon } from "@radix-ui/react-icons";

export function JarChart() {
  const { items, totalCalories } = React.useContext(ContainerContext);
  const [showPie, setShowPie] = React.useState(true);

  const chartConfig: Record<string, { label: string; color: string }> = {};
  const charData: Array<{ name: string; calories: number; fill: string }> = [];

  items.forEach((item, idx) => {
    chartConfig[item.name] = {
      label: item.name,
      color: `hsl(var(--chart-${(idx + 1) % 5}))`
    };
    charData.push({
      name: item.name,
      calories: item.quantity * item.calories,
      fill: `var(--color-${item.name})`
    });
  });

  return (
    <div className="flex flex-col gap-4 items-center">
      <Button
        variant={"outline"}
        size="icon"
        onClick={() => setShowPie(prev => !prev)}
      >
        <PieChartIcon className="h-4 w-4" />
      </Button>
      {showPie &&
        <Card className="flex flex-col w-full">
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={charData}
                  dataKey="calories"
                  nameKey="name"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalCalories.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Calories
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>}
    </div>
  );
}
