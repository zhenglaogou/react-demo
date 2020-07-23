import React from "react";
import {ReactElementLike} from "prop-types";
import {IntlProvider, addLocaleData} from "react-intl";
import {ConfigProvider} from "@alifd/next";

// 引入 react-intl 多语言包
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";

// 引入基础组件的语言包
import enUS from "@alifd/next/lib/locale/en-us";
import zhCN from "@alifd/next/lib/locale/zh-cn";

import {Lang} from "@/utils/locale";

// 引入 locale 配置文件
// eslint-disable-next-line camelcase
import en_US from "@/locales/en-US";
// eslint-disable-next-line camelcase
import zh_CN from "@/locales/zh-CN";

// 设置语言包
addLocaleData([...en, ...zh]);

const localeInfo = {
  [Lang.zhCN]: {
    nextLocale: zhCN,
    appLocale: "zh",
    // eslint-disable-next-line camelcase
    appMessages: zh_CN
  },
  [Lang.enUS]: {
    nextLocale: enUS,
    appLocale: "en",
    // eslint-disable-next-line camelcase
    appMessages: en_US
  }
};

interface Props {
  locale: Lang,
  children: ReactElementLike
}

function LocaleProvider (props: Props) {
  const {locale, children} = props,

    myLocale = localeInfo[locale]
      ? localeInfo[locale]
      : localeInfo[Lang.zhCN];

  return (
    <IntlProvider locale={myLocale.appLocale} messages={myLocale.appMessages}>
      <ConfigProvider locale={myLocale.nextLocale}>
        {React.Children.only(children)}
      </ConfigProvider>
    </IntlProvider>
  );
}

export default LocaleProvider;