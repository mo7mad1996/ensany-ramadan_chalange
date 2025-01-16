<template>
  <section
    class="pt-sm pb-sm w-full"
    aria-label="this table to show heighest donores"
  >
    <Container class="flex justify-center">
      <table class="w-3/4">
        <thead class="bg-primary">
          <tr>
            <th>
              <div class="flex gap-x-1 items-center">
                <span>Donor Name</span>
                <img src="../../../assets/images/dashboard/.svg" alt="" />
              </div>
            </th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
            <td>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
            <td>Row 2, Cell 3</td>
          </tr>
          <tr>
            <td>Row 3, Cell 1</td>
            <td>Row 3, Cell 2</td>
            <td>Row 3, Cell 3</td>
            <td>Row 3, Cell 3</td>
          </tr>
          <tr>
            <td>Row 4, Cell 1</td>
            <td>Row 4, Cell 2</td>
            <td>Row 4, Cell 3</td>
            <td>Row 4, Cell 3</td>
          </tr>
        </tbody>
      </table>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden;

  th,
  td {
    padding: 8px;
    text-align: center;
  }
  th {
    color: #fff;
  }
}
</style>
