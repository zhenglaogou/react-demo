import React, {useState, useEffect, useCallback} from "react";
import {enquire} from "enquire-js";
import Layout from "@icedesign/layout";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

export default function BasicLayout (props) {
  const
    [isScreen, setIsScreen] = useState("isDesktop"),
    // const [collapse, setCollapse] = useState(false);

    enquireScreenHandle = useCallback(type => {
      return {
        match () {
          setIsScreen(type);
        }
      };
    }, [setIsScreen]),

    /**
     * 注册监听屏幕的变化，可根据不同分辨率做对应的处理
     */
    enquireScreenRegister = useCallback(() => {
      const
        isMobile = "screen and (max-width: 720px)",
        isTablet = "screen and (min-width: 721px) and (max-width: 1199px)",
        isDesktop = "screen and (min-width: 1200px)";

      enquire.register(isMobile, enquireScreenHandle("isMobile"));
      enquire.register(isTablet, enquireScreenHandle("isTablet"));
      enquire.register(isDesktop, enquireScreenHandle("isDesktop"));
    }, [enquireScreenHandle]);

  useEffect(() => {
    enquireScreenRegister();
  }, [enquireScreenRegister]);

  const isMobile = isScreen !== "isDesktop";
  return (
    <Layout>
      <Layout.Header>
        <Header isMobile={isMobile} />
      </Layout.Header>

      <Layout.Section scrollable>
        <Layout.Aside>
          <Aside isMobile={isMobile} />
        </Layout.Aside>
        <Layout.Main>
          <div style={{minHeight: "90vh"}}>
            { props.children }
          </div>
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </Layout.Main>
      </Layout.Section>
    </Layout>
  );
}