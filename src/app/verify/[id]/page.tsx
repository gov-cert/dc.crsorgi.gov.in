import React from 'react';
import { notFound } from 'next/navigation';

export default async function VerifyPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  // Handle both Next.js 14 (sync) and 15+ (async) param patterns securely
  const id = (params instanceof Promise) ? (await params).id : params.id;

  let data = null;

  if (id.toLowerCase() === 'vedant' || id === 'B2026990347007655') {
    data = {
      regNo: 'B2026990347007655',
      name: 'VEDANT SINGH',
      gender: 'Male / पुरुष',
      dob: '05-11-2022',
      mother: 'PRIYANKA SINGH',
      father: 'MITHILESH KUMAR',
      placeOfBirth: 'PRIMARY HEALTH CENTRES TEEN PAHAR,',
      regDate: '05-02-2026',
      unitName: 'GRAMA PANCHAYAT TEEN PAHAR /',
      unitCode: '827006'
    };
  } else if (id.toLowerCase() === 'viransh' || id === 'B2026990347007010') {
    data = {
      regNo: 'B2026990347007010',
      name: 'VIRANSH SINGH',
      gender: 'Male / पुरुष',
      dob: '03-10-2021',
      mother: 'PRIYANKA SINGH',
      father: 'MITHILESH KUMAR',
      placeOfBirth: 'PRIMARY HEALTH CENTRES TEEN PAHAR,',
      regDate: '05-03-2025',
      unitName: 'GRAMA PANCHAYAT TEEN PAHAR /',
      unitCode: '827006'
    };
  } else {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] font-sans text-[#333]">
      {/* Top Banner */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b-[3px] border-[#f2f2f2] relative shadow-sm">
        <div className="absolute bottom-[-3px] left-0 w-full h-[3px] bg-gradient-to-r from-[#ff9933] via-white to-[#138808]"></div>
        <div className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/330px-Emblem_of_India.svg.png" 
            alt="Government Emblem" 
            className="h-10 opacity-90 drop-shadow-sm filter hue-rotate-[-10deg]"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg">🌙</span>
          <div className="bg-[#194a7a] text-white px-1.5 py-0.5 rounded text-xs border border-white ring-1 ring-[#194a7a]">
            →]
          </div>
          <span className="text-xl font-bold text-[#194a7a]">≡</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 mt-2">
        {/* Verification Success Header */}
        <div className="mb-6 flex items-center gap-2 bg-green-50 text-green-700 p-3 rounded border border-green-200">
           <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
           <span className="font-semibold text-sm">Certificate Verified Successfully</span>
        </div>

        {/* Details Card */}
        <div className="bg-white rounded border border-[#eaeaea] shadow-md overflow-hidden text-sm">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-[#e0e0e0]">
                <td className="p-3.5 text-[#555] w-2/5 font-medium border-r border-[#e0e0e0]">Registration Number</td>
                <td className="p-3.5 text-[#222] font-semibold">{data.regNo}</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <td className="p-3.5 text-[#555] font-medium border-r border-[#e0e0e0]">NAME</td>
                <td className="p-3.5 text-[#222] font-bold">{data.name}</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <td className="p-3.5 text-[#555] font-medium border-r border-[#e0e0e0]">GENDER</td>
                <td className="p-3.5 text-[#222]">{data.gender}</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <td className="p-3.5 text-[#555] font-medium border-r border-[#e0e0e0]">DOB</td>
                <td className="p-3.5 text-[#222] font-semibold">{data.dob}</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <td className="p-3.5 text-[#555] font-medium border-r border-[#e0e0e0]">Name Of Mother</td>
                <td className="p-3.5 text-[#222]">{data.mother}</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <td className="p-3.5 text-[#555] font-medium border-r border-[#e0e0e0]">Name Of Father</td>
                <td className="p-3.5 text-[#222]">{data.father}</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <td className="p-3.5 text-[#555] font-medium border-r border-[#e0e0e0]">Place of Birth</td>
                <td className="p-3.5 text-[#222]">{data.placeOfBirth}</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <td className="p-3.5 text-[#555] font-medium border-r border-[#e0e0e0]">Registration Date</td>
                <td className="p-3.5 text-[#222]">{data.regDate}</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <td className="p-3.5 text-[#555] font-medium border-r border-[#e0e0e0]">Registration Unit Name</td>
                <td className="p-3.5 text-[#222]">{data.unitName}</td>
              </tr>
              <tr>
                <td className="p-3.5 text-[#555] font-medium border-r border-[#e0e0e0]">Registration Unit Code</td>
                <td className="p-3.5 text-[#222]">{data.unitCode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#194a7a] py-5 text-center mt-8 flex justify-center gap-4 flex-wrap pb-10">
        <div className="text-white font-bold text-base w-full">data.gov.in</div>
        <div className="text-white font-bold text-base w-full">india.gov.in</div>
      </div>
    </div>
  );
}
