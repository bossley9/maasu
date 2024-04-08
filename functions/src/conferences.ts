import {
  fetchCSVObject,
  descDateSort,
  CONFERENCES_ID,
  getHeaders,
  ResBody,
  ResData,
} from './utils'

type ConferenceType = { id: string; date: string; type: string }

export const handler = async (event: any, context: any) => {
  let data: ResData = null

  const { data: res, error }: ResBody = await fetchCSVObject<object>(
    CONFERENCES_ID
  )

  if (res) {
    data = (res as [])
      .filter(
        (c: ConferenceType) => c.id != null && c.date != null && c.type != null
      )
      .sort((a: ConferenceType, b: ConferenceType): number =>
        descDateSort(a.date, b.date)
      )
  }

  const body: ResBody = { data, error }
  return {
    context,
    event,
    ...getHeaders(),
    statusCode: 200,
    body: JSON.stringify(body),
  }
}
