import { consola } from "consola";
import { NameResolver } from "../../util/name-resolver.js";

class SpecificArgNameResolver extends NameResolver {
  counter = 1;
  /**
   * @param {CodeGenConfig} config;
   * @param {string[]} reservedNames
   */
  constructor(config, reservedNames) {
    super(config, reservedNames, (variants) => {
      const generatedVariant =
        (variants[0] && `${variants[0]}${this.counter++}`) ||
        `${this.config.specificArgNameResolverName}${this.counter++}`;
      consola.debug(
        "generated fallback type name for specific arg - ",
        generatedVariant,
      );
      return generatedVariant;
    });
  }
}

export { SpecificArgNameResolver };
