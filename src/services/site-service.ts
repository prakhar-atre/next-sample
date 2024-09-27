import {
  IApiPaginatedResponse,
  IApiSingleResponse,
  ISiteAggregated
} from '@example-package-types';

import axiosPrivateInstance from '../api/axiosPrivateInstance';

class SiteService {
  static async getSitesAggregated(query: string): Promise<IApiPaginatedResponse<ISiteAggregated>> {
    return axiosPrivateInstance.get(`/sites-aggregated?${query}`);
  }

  static async addSite(payload: ISiteAggregated): Promise<IApiSingleResponse<ISiteAggregated>> {
    return axiosPrivateInstance.post(`/sites`, payload);
  }

  static async updateSite(
    payload: ISiteAggregated,
    id: string
  ): Promise<IApiSingleResponse<ISiteAggregated>> {
    return axiosPrivateInstance.patch(`/sites/${id}`, payload);
  }

  static async getSiteDetail(query: string): Promise<IApiSingleResponse<ISiteAggregated>> {
    return axiosPrivateInstance.get(`/sites-aggregated/${query}`);
  }

  static async deleteSite(id: string): Promise<IApiSingleResponse<ISiteAggregated>> {
    return axiosPrivateInstance.delete(`/sites/${id}`);
  }

  static async getSites(query: string): Promise<IApiPaginatedResponse<ISiteAggregated>> {
    return axiosPrivateInstance.get(`/sites?${query}`);
  }
}

export default SiteService;
