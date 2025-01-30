import { ResponsiveContainer, LineChart, Tooltip, YAxis, XAxis, Line, CartesianGrid } from 'recharts';
import { CustomTooltip, data } from "@tailus-ui/visualizations";
import { Text, Title } from '@components/typography';
import Badge from '@react-ui/badge/Badge';
import { TrendingDown, TrendingUp } from 'lucide-react';

function Chart() {
    return (
        <div className="w-full">
            <Title as="h2" size="lg" weight="medium" className="mb-1">
                Overview
            </Title>
            <Text className="mb-0 mt-1" size="sm">
                Visualize your main activities data
            </Text>
            <Title className="mt-2 flex items-center gap-3" as="span" weight="medium" size="xl">
                56493
                <Badge intent="success" size="xs" className="flex h-fit items-center gap-1.5">
                    <TrendingUp className="size-3.5" />
                    36%
                </Badge>
            </Title>

            <div className="mt-8 h-56 w-full sm:h-72" data-shade="900">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <defs>
                            <linearGradient className="text-white dark:text-gray-900" id="dotFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="currentColor" stopOpacity={1} />
                                <stop offset="95%" stopColor="currentColor" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <YAxis className="text-caption" width={36} fontSize={12} tickLine={false} axisLine={false} />
                        <XAxis className="text-caption" dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }} content={<Custom payload={[]} active fancy label={''} />} />

                        <CartesianGrid horizontal={false} stroke="var(--ui-border-color)" strokeDasharray={3} />

                        <Line
                            stroke="var(--dv-primary)"
                            dot={{ fill: 'var(--ui-bg)' }}
                            dataKey="Primary"
                            activeDot={{
                                color: 'var(--dv-primary)',
                                r: 5,
                                stroke: 'var(--ui-bg)'
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart;