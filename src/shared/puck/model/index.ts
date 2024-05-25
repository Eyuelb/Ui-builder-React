import { ReactNode } from "react";
import { Config, Data, DefaultRootProps } from "@measured/puck";
import {
  FactoryPayload,
  MantineFontSize,
  MantineRadius,
  MantineShadow,
  MantineSize,
  StyleProp,
} from "@mantine/core";
import { FlexProps } from "../components/blocks/Flex";
import { TextProps } from "../components/blocks/Text";
import { ButtonProps } from "../components/blocks/Button";
import { TitleProps } from "../components/blocks/Title";
import { SpaceProps } from "../components/blocks/Space";
import { HeaderProps } from "../components/blocks/Header";

export type MethodType = "edit" | "view";

export interface ShellProps extends DefaultRootProps {
  children: ReactNode;
  title: string;
  bg: string;
  p?: StyleProp<MantineSize | (string & {}) | number>;
}
export type ComponentConfigProps = {
  Button: ButtonProps;
  // Card: CardProps;
  // Columns: ColumnsProps;
  // Hero: HeroProps;
  // Heading: HeadingProps;
  Flex: FlexProps;
  // Logos: LogosProps;
  // Stats: StatsProps;
  Text: TextProps;
  Title: TitleProps;
  Space: SpaceProps;
  Header: HeaderProps;

};
export type DefaultPageSlug = [string, MethodType] | [MethodType];
export type DefaultPageProps = {
  params: {
    slug: DefaultPageSlug;
  };
};
export type PuckPageInfo = {
  name: string;
  id: string;
  isLoading?: boolean;
  type: MethodType;
};

export type PuckBuilderProps = {
  page: PuckPageInfo;
};
export type DesignerShellProps = {
  data?: Data;
  config: Config;
  onPublish?: (data: Data) => void;
  onChange?: (data: Data) => void;
  id: string;
};
export type DraggableItemProps = {
  children: React.ReactNode;
  name: string;
};
export type RenderPageShellProps = {
  data?: Data;
  config: Config;
  id: string;
};

export type PageRendererProps = {
  data?: Data;
  config?: Config;
  onPublish?: (data: Data) => void;
  onChange?: (data: Data) => void;
  type: MethodType;
  id: string;
};

export interface DefaultFieldsProps {
  align?: StyleProp<React.CSSProperties["alignItems"]>;
  gap?: StyleProp<MantineSize | (string & {}) | number>;
  justify?: StyleProp<React.CSSProperties["justifyContent"]>;
  direction?: StyleProp<React.CSSProperties["flexDirection"]>;

  shadow?: MantineShadow;
  radius?: MantineRadius;
  /** Determines whether the paper should have border, border color depends on color scheme, `false` by default */
  withBorder?: boolean;
  bg?: string;
}
export type DefaultFieldsTypographyProps = {
  size?: MantineSize | (string & {});
  ta?: StyleProp<React.CSSProperties["textAlign"]>;
  fz?: StyleProp<
    MantineFontSize | `h${1 | 2 | 3 | 4 | 5 | 6}` | number | (string & {})
  >;
  fw?: StyleProp<React.CSSProperties["fontWeight"]>;
  c?: string;
  lineClamp?: number;
    /** Controls `text-wrap` property, `'wrap'` by default */
  textWrap?: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
};
export type DefaultFieldsSizeProps = {
  h?: StyleProp<MantineSize | (string & {}) | number>;
  w?: StyleProp<MantineSize | (string & {}) | number>;
  miw?: StyleProp<MantineSize | (string & {}) | number>;
  maw?: StyleProp<MantineSize | (string & {}) | number>;
  mih?: StyleProp<MantineSize | (string & {}) | number>;
  mah?: StyleProp<MantineSize | (string & {}) | number>;
  p?: StyleProp<MantineSize | (string & {}) | number>;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
};

export type DefaultFieldsActionProps = {
  variant?: FactoryPayload["variant"];
};
