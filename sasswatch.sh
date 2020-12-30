#!/usr/bin/bash

if [[ -f "./public/styles" ]];then
	mkdir -p ./public/styles
fi

sassdir="./src/styles" 
cssdir="./src/styles"
cmd="sass --watch"

for i in ${sassdir}/*.sass ; do
	cmd="${cmd} ${sassdir}/$(basename ${i}):${cssdir}/$(echo $(basename ${i}) | sed 's/\.sass$/\.css/g')"
done

eval ${cmd}
