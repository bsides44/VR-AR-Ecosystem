// Uses Incremental Static Generation (the revalidate key in the returned props).
// To disable, remove the revalidate key.
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useMapData() {
  const { data, error, isLoading } = useSWR(`/api/v2/vrmap`, fetcher, {
    refreshInterval: 10000
  })

  return {
    data,
    isLoading,
    isError: error
  }
}