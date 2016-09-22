requestedComponent = strsplit(req$QUERY_STRING,"\\?|\\.")[[1]][2];
componentFolder= "RSIMU/components/"
templateFolder = componentFolder + "templates/";
logicFolder    =  componentFolder + "logics/";

templateFile = templateFolder + requestedComponent + ".html";

template = paste0(readLines(templateFile),collapse = "\n")

x = template;
TLoc = lapply(c("<my-",">"), function(ch){unlist(ifelse(grepl(ch,x,perl = F),gregexpr(ch, x,perl = F),NA))})
dependancies = NULL;
importDependancies = "import {Component, onInit, ElementRef} from '@angular/core';\n"
if (!is.na(TLoc[[1]][1]))
for (xind in TLoc[[1]]){ # xind = TLoc[[1]][1]
  subTemplate = substr(template, xind,TLoc[[2]][TLoc[[2]]>xind][1])
  compSelector = strsplit(subTemplate,"<my-| |>")[[1]][2]
  compWords = strsplit(compSelector,"-")[[1]]
  compName = paste(sapply(compWords, cap),collapse = "")
  if ((compName+"Component") %chin% dependancies){
    # it is already added to dependencies tree
  }else{
    dependancies = append(dependancies,compName + "Component")
    compFile = compWords[1] + sapply(compWords[-1], cap) + ".component.ts"
    if (compFile %chin% dir(componentFolder))
      newDependancy = "import {" + compName + "Component} from './"+compFile+"';\n"
    else
      newDependancy = "import {" + compName + "Component} from './componentFactory?"+compSelector+"';\n"

    importDependancies = importDependancies + newDependancy;
  }
}

logicFile = requestedComponent+".ts";
compLogic = ifelse(logicFile %chin% dir(logicFolder),
                   paste0(readLines(logicFolder + logicFile),collapse = "\n"),"")

res = list(
  src = importDependancies +
"@Component({\n" +
  "\tselector: 'my-" + requestedComponent + "',\n" +
  "\ttemplate: `\n"+ template + "\n`,\n" +
  "\tdirectives: ["+ paste(dependancies,collapse = ", ") + "]\n"+
"})\n" +
"export class "+cap(requestedComponent)+"Component implements onInit{\n"+  compLogic  +"\n};",
  type = "text/plain")

