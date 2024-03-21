export const TableSkeleton = () => {
    return (
        <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">No</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-2">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="animate-pulse">
        <tr className="bg-white border-b border-gray-50">
          <td className="py-3 px-6">
            <div className="h-4 w-4 rounded bg-gray-400"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-400"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-400"></div>
          </td>
          <td className="py-3 px-2">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </td>
          <td className="flex justify-center gap-1 py-3">
            <div className="h-7 w-7 rounded-sm bg-gray-400"></div>
            <div className="h-7 w-7 rounded-sm bg-gray-400"></div>
          </td>
        </tr>
      </tbody>
    </table>
    )
}