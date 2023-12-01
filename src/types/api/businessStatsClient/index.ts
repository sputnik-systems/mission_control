export interface GetStatTimeSeriesByCompanyUUIDParams{
    startTime: string
    endTime?: string
    stepDuration: string
    companyUUID: string
    metricName: string
}