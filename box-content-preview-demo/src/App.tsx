import "./App.css";
import ContentPreview from "box-ui-elements/es/elements/content-preview";
import IntlProvider from "react-intl";

function App() {
  return (
    <IntlProvider locale="en">
      <ContentPreview
        contentSidebarProps={{
          detailsSidebarProps: {
            hasAccessStats: true,
            hasClassification: true,
            hasNotices: true,
            hasProperties: true,
            hasRetentionPolicy: true,
            hasVersions: true,
          },
          features: FEATURES,
          hasActivityFeed: true,
          hasMetadata: true,
          hasSkills: true,
          hasVersions: true,
        }}
        hasHeader={true}
        features={FEATURES}
        fileId={FILE_ID}
        token={TOKEN}
        {...PROPS}
      />
    </IntlProvider>
  );
}

export default App;
