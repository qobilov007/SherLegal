import React from 'react'
import AboutUs from './_components/AboutUs'
import { getStatistics } from '@/lib/getStatistics';

export default async function page() {
    const statistics = await getStatistics();

  return (
    <div>
      <AboutUs statistics={statistics}  />
    </div>
  )
}
