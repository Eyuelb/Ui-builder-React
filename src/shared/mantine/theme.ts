import type { MantineThemeOverride } from "@mantine/core";
export const theme: Partial<MantineThemeOverride> = {
  defaultRadius: "sm",
  primaryColor: "primary",
  primaryShade: 9,
  fontFamily: "inherit",
  fontFamilyMonospace: "inherit",
  fontSizes: {
    xs: "12px",
    sm: "13px",
    md: "16px",
    lg: "19px",
    xl: "24px",
  },
  breakpoints: {
    xs: "412px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  colors: {
    primary: [
      "#e3f9ff",
      "#d3eef9",
      "#acdaee",
      "#81c5e2",
      "#5eb4d9",
      "#47a8d3",
      "#37a3d1",
      "#258eba",
      "#117fa7",
      "#006d95"
    ],
  },

  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320,
        },
      },
    },
    Button: {
      defaultProps: {
        size: "xs",
        fz: "12px",
        fw: 500,
        px: 12,
      },
      styles: {
        section: {
          marginRight: 4,
          marginLeft: 8,
        },
      },
    },

    Input: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    TextInput: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
        error: "min-h-[15px]",
      },
    },
    // TextInput: TextInput.extend({
    //   classNames: InputClasses
    // }),
    NumberInput: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Select: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    DatePickerInput: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Checkbox: {
      defaultProps: {
        size: "sm",
        miw: 60,
      },
    },
    CheckboxGroup: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Radio: {
      defaultProps: {
        size: "sm",
        miw: 60,
      },
    },
    RadioGroup: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Textarea: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Breadcrumbs: {
      styles: {
        breadcrumb: {
          fontSize: "14px",
        },
      },
    },
    Paper: {
      styles: {
        root: {
          backgroundColor: "var(--card-color-body)",
        },
      },
    },
    AppShell: {
      styles: {
        main: {
          // backgroundColor: '#F3F4F6',
        },
        header: {
          height: 40,
        },
      },
    },
    Loader: {
      defaultProps: {
        type: "bars",
      },
    },
  },
};
