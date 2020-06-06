import { shallowMount } from "@vue/test-utils";
import FlatInput from "@/components/CharacterBase/FlatInput.vue";

describe("FlatInput.vue", () => {
  it("renders props.label when passed", () => {
    const label = "new label";

    const wrapper = shallowMount(FlatInput, {
      propsData: { label: label },
    });

    expect(wrapper.text()).toMatch(label);
  });

  it("generate the input ID", () => {
    const wrapper = shallowMount(FlatInput, {
      propsData: { label: "foobar" },
    });

    const uuidv4Regex = /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/;
    expect(wrapper.find("input").attributes("id")).toMatch(uuidv4Regex);
  });

  it("has a label for the input", () => {
    const wrapper = shallowMount(FlatInput, {
      propsData: { label: "foobar" },
    });

    expect(wrapper.find("input").attributes("id")).toStrictEqual(
      wrapper.find("label").attributes("for")
    );
  });
});
