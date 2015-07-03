#!/usr/bin/env Rscript

library(data.table)
library(jsonlite)

files = c(
    "../source/data/S00044_S00063.csv",
    "../source/data/S00064_S00083.csv"
    )
thicknesses = c(
    0.166,
    0.166
    ) #um

datasets = data.table(file=files, thickness=thicknesses)
setkey(datasets, file)

summary = datasets[, `:=`(
      mean_A=fread(file)[,mean(A)],
      sd_A=fread(file)[,sd(A)],
      mean_B=fread(file)[,mean(B)],
      sd_B=fread(file)[,sd(B)],
      mean_R=fread(file)[,mean(R)],
      sd_R=fread(file)[,sd(R)]), by=file
    ]
summary = summary[,file := gsub("../source/", "", file)]

print(toJSON(summary))