export interface PackagesDto {
    _id: string
    createdOn: number
    packageAddress: string
    packageContents: string
    packageDestination: string
    packageName: string
    trackingNumber: string
    packageWeight: number
    packageTracking: {
        _id: string
        currentLocation: string
        date: string
        iconType: string
        map_Info: string
        tagLine: string
        time: string
    }[]
}