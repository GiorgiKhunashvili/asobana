import { Text, type TextProps } from 'react-native';
import { palette, toMtavruli, type, type TypeVariant } from '../theme';

export interface TxtProps extends TextProps {
  readonly variant?: TypeVariant;
  readonly color?: string;
}

export function Txt({
  variant = 'body',
  color = palette.text,
  style,
  ...props
}: TxtProps) {
  return (
    <Text
      maxFontSizeMultiplier={1.6}
      {...props}
      style={[type[variant], { color }, style]}
    />
  );
}

/** Display line set in Mtavruli; screen readers receive the Mkhedruli original. */
export function Display({
  children,
  variant = 'title',
  ...props
}: Omit<TxtProps, 'children'> & { readonly children: string }) {
  return (
    <Txt
      accessibilityLabel={children}
      maxFontSizeMultiplier={1.3}
      variant={variant}
      {...props}
    >
      {toMtavruli(children)}
    </Txt>
  );
}
