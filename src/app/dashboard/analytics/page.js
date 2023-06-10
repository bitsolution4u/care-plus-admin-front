'use client';
// ** MUI Import
import Grid from '@mui/material/Grid';

// ** Demo Component Imports
// import AnalyticsProject from 'src/views/dashboards/analytics/AnalyticsProject';
import AnalyticsProject from '../components/analytics/AnalyticsProject';
// import AnalyticsOrderVisits from 'src/views/dashboards/analytics/AnalyticsOrderVisits';
import AnalyticsOrderVisits from '../components/analytics/AnalyticsOrderVisits';
// import AnalyticsTotalEarning from 'src/views/dashboards/analytics/AnalyticsTotalEarning';
import AnalyticsTotalEarning from '../components/analytics/AnalyticsTotalEarning';
// import AnalyticsSourceVisits from 'src/views/dashboards/analytics/AnalyticsSourceVisits';
import AnalyticsSourceVisits from '../components/analytics/AnalyticsSourceVisits';
// import AnalyticsEarningReports from 'src/views/dashboards/analytics/AnalyticsEarningReports';
import AnalyticsEarningReports from '../components/analytics/AnalyticsEarningReports';
// import AnalyticsSupportTracker from 'src/views/dashboards/analytics/AnalyticsSupportTracker';
import AnalyticsSupportTracker from '../components/analytics/AnalyticsSupportTracker';
// import AnalyticsSalesByCountries from 'src/views/dashboards/analytics/AnalyticsSalesByCountries';
import AnalyticsSalesByCountries from '../components/analytics/AnalyticsSalesByCountries';
// import AnalyticsMonthlyCampaignState from 'src/views/dashboards/analytics/AnalyticsMonthlyCampaignState';
import AnalyticsMonthlyCampaignState from '../components/analytics/AnalyticsMonthlyCampaignState';
// import AnalyticsWebsiteAnalyticsSlider from 'src/views/dashboards/analytics/AnalyticsWebsiteAnalyticsSlider';
import AnalyticsWebsiteAnalyticsSlider from '../components/analytics/AnalyticsWebsiteAnalyticsSlider';

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import CardStatsWithAreaChart from 'src/@core/components/card-statistics/card-stats-with-area-chart';

const AnalyticsDashboard = () => {
  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6}>
            <AnalyticsWebsiteAnalyticsSlider />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <AnalyticsOrderVisits />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CardStatsWithAreaChart
              stats="97.5k"
              chartColor="success"
              avatarColor="success"
              title="Revenue Generated"
              avatarIcon="tabler:credit-card"
              chartSeries={[{ data: [6, 35, 25, 61, 32, 84, 70] }]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AnalyticsEarningReports />
          </Grid>
          <Grid item xs={12} md={6}>
            <AnalyticsSupportTracker />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsSalesByCountries />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsTotalEarning />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsMonthlyCampaignState />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsSourceVisits />
          </Grid>
          <Grid item xs={12} lg={8}>
            <AnalyticsProject />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  );
};

export default AnalyticsDashboard;
