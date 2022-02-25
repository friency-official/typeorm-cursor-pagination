import { ObjectType } from 'typeorm';
import Paginator, { Order } from './Paginator';
export interface PagingQuery {
    afterCursor?: string;
    beforeCursor?: string;
    limit?: number;
    order?: Order;
}
export interface PaginationOptions<Entity> {
    entity: ObjectType<Entity>;
    alias?: string;
    query?: PagingQuery;
    paginationKeys?: Extract<keyof Entity, string>[];
}
export declare function buildPaginator<Entity>(options: PaginationOptions<Entity>): Paginator<Entity>;
