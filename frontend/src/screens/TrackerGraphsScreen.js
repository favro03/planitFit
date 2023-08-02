import React from 'react';
import { Link } from 'react-router-dom';
import NeckProgressChart from '../components/progressCharts/NeckProgressChart';
import WeightProgressChart from '../components/progressCharts/WeightProgressChart'
import ChestProgressChart from '../components/progressCharts/ChestProgressChart'
import WaistProgressChart from '../components/progressCharts/WaistProgressChart';
import StomachProgressChart from '../components/progressCharts/StomachProgressChart'
import HipsProgressChart from '../components/progressCharts/HipsProgressChart';
import ButtProgressChart from '../components/progressCharts/ButtProgressChart';
import ThighProgressChart from '../components/progressCharts/ThighProgressChart';
import CalfProgressChart from '../components/progressCharts/CalfProgressChart';
import ArmsProgressChart from '../components/progressCharts/ArmsProgressChart';
import { useGetTrackersQuery } from '../slices/trackersApiSlice';


const TrackerGraphs = () => {
  const { data: trackersData, isLoading, error } = useGetTrackersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Extract neckData and createdAt from the trackersData
  const neckData = trackersData.map((tracker) => tracker.neck);
  const weightData = trackersData.map((tracker) => tracker.weight);
  const chestData = trackersData.map((tracker) => tracker.boobs);
  const waistData = trackersData.map((tracker) => tracker.waist);
  const stomachData = trackersData.map((tracker) => tracker.stomach);
  const hipsData = trackersData.map((tracker) => tracker.hips);
  const buttData = trackersData.map((tracker) => tracker.butt);
  const thighData = trackersData.map((tracker) => tracker.thigh);
  const calfData = trackersData.map((tracker) => tracker.calf);
  const armsData = trackersData.map((tracker) => tracker.arm);
  const createdAt = trackersData.map((tracker) => tracker.createdAt);

  return (
    <div>
      <Link to='/tracker' className='btn btn-light my-3'>
        Go Back
      </Link>
      <h1>Measurment Progress Over Time</h1>
      <WeightProgressChart weightData={weightData} timestamps={createdAt} />
      <NeckProgressChart neckData={neckData} timestamps={createdAt} />
      <ChestProgressChart chestData={chestData} timestamps={createdAt} />
      <WaistProgressChart waistData={waistData} timestamps={createdAt} />
      <StomachProgressChart stomachData={stomachData} timestamps={createdAt} />
      <HipsProgressChart hipsData={hipsData} timestamps={createdAt} />
      <ButtProgressChart buttData={buttData} timestamps={createdAt} />
      <ThighProgressChart thighData={thighData} timestamps={createdAt} />
      <CalfProgressChart calfData={calfData} timestamps={createdAt} />
      <ArmsProgressChart armsData={armsData} timestamps={createdAt} />
    </div>
  );
};

export default TrackerGraphs;
