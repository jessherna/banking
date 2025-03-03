import React from 'react'

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance 
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            {/* Doughnut Chart */}
        </div>

        <div className="flex flex-col gap-2">
            <h2>
                {totalBanks}
            </h2>
        </div>

    </section>
  )
}

export default TotalBalanceBox
