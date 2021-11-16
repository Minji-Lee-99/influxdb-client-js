/**
 * Type of query result column, see {@link https://docs.influxdata.com/influxdb/v2.1/reference/syntax/annotated-csv/#data-types }
 */
export type ColumnType =
  | 'boolean'
  | 'unsignedLong'
  | 'long'
  | 'double'
  | 'string'
  | 'base64Binary'
  | 'dateTime:RFC3339'
  | 'duration'
  | string

/**
 * Column metadata class of a {@link http://bit.ly/flux-spec#table | flux table} column.
 */
export interface FluxTableColumn {
  /**
   * Label (e.g., "_start", "_stop", "_time").
   */
  label: string

  /**
   * The data type of column (e.g., "string", "long", "dateTime:RFC3339").
   */
  dataType: ColumnType

  /**
   * Boolean flag indicating if the column is a part of the table's group key.
   */
  group: boolean

  /**
   * Default value to be used for rows whose string value is an empty string.
   */
  defaultValue: string

  /**
   * Index of this column in a row array.
   */
  index: number
}

/**
 * FluxTableColumn implementation.
 */
class FluxTableColumnImpl implements FluxTableColumn {
  label: string
  dataType: ColumnType
  group: boolean
  defaultValue: string
  index: number
}

/**
 * Creates a new flux table column.
 * @returns column instance
 */
export function newFluxTableColumn(): FluxTableColumn {
  return new FluxTableColumnImpl()
}

/**
 * Creates a flux table column from a partial FluxTableColumn.
 * @param object - source object
 * @returns column instance
 */
export function createFluxTableColumn(
  object: Partial<FluxTableColumn>
): FluxTableColumn {
  const retVal = new FluxTableColumnImpl()
  retVal.label = String(object.label)
  retVal.dataType = object.dataType as ColumnType
  retVal.group = Boolean(object.group)
  retVal.defaultValue = object.defaultValue ?? ''
  retVal.index = object.index ?? 0
  return retVal
}
