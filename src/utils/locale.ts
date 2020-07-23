enum Lang {
  zhCN = "zh-CN",
  enUS = "en-US"
}

/**
 * 设置当前语言
 * @param {string} lang
 */
function setLocale (lang: string) {
  if (lang !== undefined && !/^([a-z]{2})-([A-Z]{2})$/.test(lang)) {
    throw new Error("setLocale lang format error");
  }

  if (getLocale().toString() !== lang) {
    window.localStorage.setItem("lang", lang);
    window.location.reload();
  }
}

/**
 * 获取当前语言
 */
function getLocale (): Lang {
  if (!window.localStorage.getItem("lang")) {
    window.localStorage.setItem("lang", navigator.language);
  }

  const lang: string | null = localStorage.getItem("lang");
  switch (lang) {
    case "zh-CN":
      return Lang.zhCN;
    case "en-US":
      return Lang.enUS;
    default:
      return Lang.zhCN;
  }
}

export {setLocale, getLocale, Lang};