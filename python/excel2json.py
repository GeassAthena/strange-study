import xlrd
import json, time,  os

def excel2json (path):
    sTime = time.time()
    print('start...')
    workbook = xlrd.open_workbook(path).sheet_by_index(0)
    # print('reading from excel: %s', path)
    rows = workbook.nrows
    cols = workbook.ncols
    # print('total: %s')
    # for i in range(1, rows):
    print('%s'%(workbook.cell_value(0, 0)))

excel2json('SAAS.xlsx')